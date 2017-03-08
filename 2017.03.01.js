// The businesspeople among you will know that it's often not easy to find an appointment. In this kata we want to find such an appointment automatically. You will be given the calendars of our businessperson and a duration for the meeting. Your task is to find the earliest time, when every businessperson is free for at least that duration.

// Example Schedule:

// Person | Meetings
// -------+-----------------------------------------------------------
//      A | 09:00 - 11:30, 13:30 - 16:00, 16:00 - 17:30, 17:45 - 19:00
//      B | 09:15 - 12:00, 14:00 - 16:30, 17:00 - 17:30
//      C | 11:30 - 12:15, 15:00 - 16:30, 17:45 - 19:00
// Rules:

// All times in the calendars will be given in 24h format "hh:mm", the result must also be in that format
// A meeting is represented by its start time (inclusively) and end time (exclusively) -> if a meeting takes place from 09:00 - 11:00, the next possible start time would be 11:00
// The businesspeople work from 09:00 (inclusively) - 19:00 (exclusively), the appointment must start and end within that range
// If the meeting does not fit into the schedules, return null or None as result
// The duration of the meeting will be provided as an integer in minutes
// Following these rules and looking at the example above the earliest time for a 60 minutes meeting would be 12:15.

// Data Format:

// The schedule will be provided as 3-dimensional array. The schedule above would be encoded this way:

function getStartTime(schedules, duration) {
	console.log(JSON.parse(JSON.stringify(schedules)));
	const [timeline, ...rest] = schedules
	// 将时间转换为当天的时间戳
	const transTime = time => +new Date(`${new Date().toLocaleString().split(/\s/)[0]} ${time}:00`)
	// 0: 早于时间段，1: 在时间段内部，2: 晚于时间段
	const isBetween = (range, time) => {
		const start = transTime(range[0])
		const end = transTime(range[1])
		const test = transTime(time)
		return test < start ? 0 : (test <= end ? 1: 2)
	}
	const valid = (start, end, duration) => {
		const startTime = transTime(start)
		const endTime = transTime(end)
		const durationTime = duration * 60 * 1000
		return endTime - startTime >= durationTime
	}
	rest.forEach(arr => {
		arr.forEach((a, i) => { // a 是指被判断的每一个时间段
			let result = timeline.reduce((acc, t, i) => {
				if (isBetween(t, a[0]) === 0 && !acc.start) acc.start = {index: i, time: a[0]}
				if (isBetween(t, a[0]) === 1 && !acc.start) acc.start = {index: i, time: t[0]}
				if (isBetween(t, a[1]) === 0 && !acc.end) acc.end = {index: i, time: a[1]}
				if (isBetween(t, a[1]) === 1 && !acc.end) acc.end = {index: i + 1, time: t[1]}
				return acc
			}, {})
			if (!result.start) result = {start: {index: timeline.length, time: a[0]}, end: {index: timeline.length, time: a[1]}}
			timeline.splice(result.start.index, result.end.index, [result.start.time, result.end.time])
		})
	})
	console.log(timeline, duration)
	return timeline.reduce((acc, t, i) => {
		if (!timeline[i - 1] && !acc) {
			acc = valid('09:00', t[0], duration) ? '09:00' : null
		}
		if (!acc) { 
			if (!timeline[i + 1]) {
				acc = valid(t[1], '19:00', duration) ? t[1] : null
			} else {
				acc = valid(t[1], timeline[i + 1][0], duration) ? t[1] : null
			}
		}
		return acc
	}, null)
}





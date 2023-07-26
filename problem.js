// You are given a floating-point number hour, representing the amount of time you have to reach the office. To commute to the office, you must take n trains in sequential order. You are also given an integer array dist of length n, where dist[i] describes the distance (in kilometers) of the ith train ride.

// Each train can only depart at an integer hour, so you may need to wait in between each train ride.

// For example, if the 1st train ride takes 1.5 hours, you must wait for an additional 0.5 hours before you can depart on the 2nd train ride at the 2 hour mark.
// Return the minimum positive integer speed (in kilometers per hour) that all the trains must travel at for you to reach the office on time, or -1 if it is impossible to be on time.

// Tests are generated such that the answer will not exceed 107 and hour will have at most two digits after the decimal point.


// The problem is that it's timing out which suggests an infinite while loop?

/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    const checkTime = function(minSpeed) {
        let totTime = 0;
        for (let i = 0; i < dist.length - 1; i++) {
            let el = dist[i];
            totTime += el / minSpeed;
            totTime = Math.ceil(totTime);
        }
        totTime += dist[dist.length - 1] / minSpeed;
        return totTime;
    }
    if (dist.length - 1 > hour) {
        return -1;
    } else {
        let low = 0;
        let high = 10;
        while (low <= high) {
            let mid = low + (low + high) / 2;
            let time = checkTime(mid);
            if (time <= hour) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
};

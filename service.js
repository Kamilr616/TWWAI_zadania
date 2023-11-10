const convertData = (data) => {
    const lines = data.trim().split('\n');
    lines.shift();
    return lines.map(line => {
        const [date, temperature] = line.split(',');
        return {
            x: date,
            y: temperature
        }
    });
};

module.exports = {
    convertData : convertData
}
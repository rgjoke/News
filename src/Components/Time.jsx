    const date = new Date();
    const options = {
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric'
    }

    const time = date.toLocaleString('ru', options);
 

export default time;
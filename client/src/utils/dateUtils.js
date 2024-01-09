const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const formatDateShort = (dateString) => {
  const options = { day: 'numeric', month: 'short' };
  const [month, day] = new Date(dateString).toLocaleDateString('en-US', options).split(' ');
  return `${day} ${month}`;
};

const formatTime = (dateString) => {
  const options = { hour: 'numeric', minute: 'numeric' };
  return new Date(dateString).toLocaleTimeString('en-US', options);
};

const currentWeek = () => {
  const today = new Date();
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
  return { firstDayOfWeek, lastDayOfWeek };
};

export { formatDate, formatDateShort, formatTime, currentWeek };

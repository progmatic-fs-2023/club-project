const formatDateLong = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const formatDateShort = (dateString) => {
  const options = { day: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString('en-US', options);
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

export { formatDateLong, formatDate, formatDateShort, formatTime, currentWeek };

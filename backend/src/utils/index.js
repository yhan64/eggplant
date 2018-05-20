export function getMissingMsg(obj, requiredFields) {
  const missingFields = requiredFields.filter(field => !obj[field]);
  if (missingFields.length) {
    return `Missing ${missingFields.join(', ')}`;
  }
  return null;
}

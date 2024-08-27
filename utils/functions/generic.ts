export function generateUniqueId() {
  const timestamp = new Date().getTime();
  const uniqueId = `id_${timestamp}`;
  return uniqueId;
}

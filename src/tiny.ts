/**
 * Script để làm chậm dần thời gian load page
 * Từ 03/01/2026 đến 03/04/2026 (3 tháng)
 * Delay tăng dần từ 0ms đến 5000ms
 */

const START_DATE = new Date('2026-01-03T00:00:00');
const END_DATE = new Date('2026-04-03T00:00:00');
const MAX_DELAY_MS = 5000; // 5 giây

/**
 * Tính số ngày đã trôi qua từ ngày bắt đầu
 */
function getDaysElapsed(): number {
  const now = new Date();
  const diffTime = now.getTime() - START_DATE.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

/**
 * Tính tổng số ngày trong khoảng thời gian
 */
function getTotalDays(): number {
  const diffTime = END_DATE.getTime() - START_DATE.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Tính delay (ms) dựa trên số ngày đã trôi qua
 * Linear interpolation từ 0ms đến MAX_DELAY_MS
 */
function calculateDelay(): number {
  const daysElapsed = getDaysElapsed();
  const totalDays = getTotalDays();
  
  // Nếu chưa đến ngày bắt đầu, delay = 0
  if (daysElapsed <= 0) {
    return 0;
  }
  
  // Nếu đã qua ngày kết thúc, delay = MAX_DELAY_MS
  if (daysElapsed >= totalDays) {
    return MAX_DELAY_MS;
  }
  
  // Tính delay theo tỷ lệ linear
  const progress = daysElapsed / totalDays;
  return Math.round(progress * MAX_DELAY_MS);
}

/**
 * Tạo một Promise delay trong khoảng thời gian nhất định
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Apply delay vào page load
 * Gọi hàm này khi page đang load để làm chậm
 */
export async function applyPageLoadDelay(): Promise<void> {
  const delay = calculateDelay();
  if (delay > 0) {
    await sleep(delay);
  }
}

/**
 * Get current delay value (ms) - dùng để debug
 */
export function getCurrentDelay(): number {
  return calculateDelay();
}

/**
 * Tự động apply delay khi module được import
 * Uncomment dòng dưới nếu muốn tự động delay khi import
 */
// applyPageLoadDelay();


import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "kage_admin_session";
const SESSION_DURATION = 8 * 60 * 60 * 1000;

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

export function createAdminSession() {
  const expiresAt = String(Date.now() + SESSION_DURATION);
  const signature = createHmac("sha256", getSecret()).update(expiresAt).digest("hex");
  return { token: `${expiresAt}.${signature}`, expiresAt: Number(expiresAt) };
}

export function isValidAdminSession(token?: string) {
  if (!token || !getSecret()) return false;
  const [expiresAt, suppliedSignature] = token.split(".");
  if (!expiresAt || !suppliedSignature || !/^\d+$/.test(expiresAt)) return false;
  if (Number(expiresAt) <= Date.now()) return false;
  const expected = createHmac("sha256", getSecret()).update(expiresAt).digest("hex");
  const supplied = Buffer.from(suppliedSignature);
  const valid = Buffer.from(expected);
  return supplied.length === valid.length && timingSafeEqual(supplied, valid);
}

export function isAdminPasswordValid(password: string) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected || !password) return false;
  const supplied = Buffer.from(password);
  const stored = Buffer.from(expected);
  return supplied.length === stored.length && timingSafeEqual(supplied, stored);
}

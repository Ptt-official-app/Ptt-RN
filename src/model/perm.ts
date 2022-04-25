export type PERM = number

export const PERM_INVALID: PERM = 0o00000000000
export const PERM_BASIC: PERM = 0o00000000001 /* 基本權力       */
export const PERM_CHAT: PERM = 0o00000000002 /* 進入聊天室     */
export const PERM_PAGE: PERM = 0o00000000004 /* 找人聊天       */
export const PERM_POST: PERM = 0o00000000010 /* 發表文章       */
export const PERM_LOGINOK: PERM = 0o00000000020 /* 註冊程序認證   */
export const PERM_MAILLIMIT: PERM = 0o00000000040 /* 信件無上限     */
export const PERM_CLOAK: PERM = 0o00000000100 /* 目前隱形中     */
export const PERM_SEECLOAK: PERM = 0o00000000200 /* 看見忍者       */
export const PERM_XEMPT: PERM = 0o00000000400 /* 永久保留帳號   */
export const PERM_SYSOPHIDE: PERM = 0o00000001000 /* 站長隱身術     */
export const PERM_BM: PERM = 0o00000002000 /* 板主           */
export const PERM_ACCOUNTS: PERM = 0o00000004000 /* 帳號總管       */
export const PERM_CHATROOM: PERM = 0o00000010000 /* 聊天室總管     */
export const PERM_BOARD: PERM = 0o00000020000 /* 看板總管       */
export const PERM_SYSOP: PERM = 0o00000040000 /* 站長           */
export const PERM_BBSADM: PERM = 0o00000100000 /* BBSADM         */
export const PERM_NOTOP: PERM = 0o00000200000 /* 不列入排行榜   */
export const PERM_VIOLATELAW: PERM = 0o00000400000 /* 違法通緝中     */
export const PERM_ANGEL: PERM = 0o00001000000 /* 有資格擔任小天使 */
export const PERM_NOREGCODE: PERM = 0o00002000000 /* 不允許認證碼註冊 */
export const PERM_VIEWSYSOP: PERM = 0o00004000000 /* 視覺站長       */
export const PERM_LOGUSER: PERM = 0o00010000000 /* 觀察使用者行蹤 */
export const PERM_NOCITIZEN: PERM = 0o00020000000 /* 搋奪公權       */
export const PERM_SYSSUPERSUBOP: PERM = 0o00040000000 /* 群組長         */
export const PERM_ACCTREG: PERM = 0o00100000000 /* 帳號審核組     */
export const PERM_PRG: PERM = 0o00200000000 /* 程式組         */
export const PERM_ACTION: PERM = 0o00400000000 /* 活動組         */
export const PERM_PAINT: PERM = 0o01000000000 /* 美工組         */
export const PERM_POLICE_MAN: PERM = 0o02000000000 /* 警察總管       */
export const PERM_SYSSUBOP: PERM = 0o04000000000 /* 小組長         */
export const PERM_OLDSYSOP: PERM = 0o10000000000 /* 退休站長       */
export const PERM_POLICE: PERM = 0o20000000000 /* 警察 */

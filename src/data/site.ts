export const categories = [
  { id: 'books', en: 'Books', zh: '書架', description: '閱讀筆記、書評與想法', icon: 'book' },
  { id: 'travel', en: 'Travel', zh: '旅行', description: '旅途見聞與行程紀錄', icon: 'plane' },
  { id: 'lifeinnl', en: 'Life in NL', zh: '荷蘭生活', description: '日常、文化觀察與心得', icon: 'home' },
  { id: 'ideas', en: 'Ideas', zh: '思考筆記', description: '從閱讀、生活到世界的想法', icon: 'sprout' },
] as const;
export type Category = typeof categories[number]['id'];

export const reading = { title: '思辨賽局 The Art of strategy', author: 'Avinash Dixit', progress: 35 };
export const photoCredits = [
  { name: 'Amsterdam canal', id: '1512470876302-972faa2aa9a4' },
  { name: 'Lakeside journey', id: '1501785888041-af3ef285b470' },
  { name: 'Reading desk', id: '1499750310107-5fef28a66643' },
  { name: 'Forest walk', id: '1473448912268-2022ce9509d8' },
];

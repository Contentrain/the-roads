// @ts-nocheck
export async function GET() {
  const roads = import.meta.glob("../../../content/roads/*.md");
  const iterablePostFiles = Object.entries(roads)
  const allRoads = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      return {
        ...metadata,
        path,
      }
    })
  )
  return {
    body: allRoads.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      const newaData = a.date.replace(/(\d+[/])(\d+[/])/, '$2$1');
      const newbData = b.date.replace(/(\d+[/])(\d+[/])/, '$2$1');

      return new Date(newbData) - new Date(newaData);
    })
  }
}
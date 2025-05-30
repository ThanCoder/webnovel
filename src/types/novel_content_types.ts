export enum NovelContentTypes {
  chapter='chapter',
  pdf='pdf',
  novelData='novelData',
  downloadLink='downloadLink',
}

export const getNovelContentTypesList = ():string[]=>{
  let list:string[] = []
  for(var name in NovelContentTypes){
    list.push(name)
    
  }
  return list
}
export default interface IStorateProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}

import { Themes } from "./themes";

export interface Project {
  name: string;
  url: string;
  image: string;
  skills: Array<Themes>;
  description: string;
}
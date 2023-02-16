export interface FormData {
  title: string;
  date?: string;
  reminder: boolean;
  description?: string;
}

export interface Task extends FormData {
  id: number;
}

import { Student } from '../../domain/entities/stundent'

export interface StundentRepository {
  findById(id: string): Promise<Student | null>;
}
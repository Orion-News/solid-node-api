import { StundentRepository } from "../../src/application/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/stundent";


export class InMemoryStudentsRepository implements StundentRepository {
  public items: Student[] = [];

  async findById(id: string): Promise<Student | null> {
    const student = this.items.find(student => student.id === id)

    if (!student) return null;

    return student;
  }
}
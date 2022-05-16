import { Submission } from "../../domain/entities/submission"
import { StundentRepository } from "../repositories/StudentsRepository";
import { ChallengeRepository } from "../repositories/ChallengesRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
}

export class CreateChallengeSubmission {
  constructor( 
      private stundentRepository: StundentRepository, 
      private challengesRepository: ChallengeRepository, 
    ) {}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const stundent = await this.stundentRepository.findById(studentId)

    if (!stundent) throw new Error('Students does not exists.');
    
    const challenge = await this.challengesRepository.findById(challengeId)

    if (!challenge) throw new Error('Students does not exists.');

    const submission = Submission.create({
      studentId,
      challengeId
    }, '_id-ashdgasjhgdshja')

    return submission
  }
}
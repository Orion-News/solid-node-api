import { Submission } from "../../domain/submission"

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
}

export class CreateChallengeSubmission {
  execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const submission = Submission.create({
      studentId,
      challengeId
    })

    return submission
  }
}
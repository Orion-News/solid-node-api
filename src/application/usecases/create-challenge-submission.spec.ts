import { CreateChallengeSubmission } from "./create-challenge-submission"

// const makeSut = () => {
//   const sut =  new CreateChallengeSubmission()
//   return sut.execute({
//     studentId: 'fake-stundent-id',
//     challengeId: 'fake-challenge-id'
//   })
// }

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const sut = new CreateChallengeSubmission();

    const response = await sut.execute({
      studentId: 'fake-stundent-id',
      challengeId: 'fake-challenge-id'
    })

    expect(response).toBeTruthy()
  })
})
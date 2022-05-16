import { Entity } from "../../core/Entity";

type ChallengeProps = {
  title: string;
  instrucctionUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id? : string) {
    super(props, id);
  }

  public create(props: ChallengeProps, id?: string) {
    const challenge = new Challenge(props, id);

    return challenge;
  }
}
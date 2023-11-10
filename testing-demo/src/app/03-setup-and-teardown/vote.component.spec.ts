import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  it('should increment totalVotes when upvoted', () => {
    // Arrange
    let component = new VoteComponent();
    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });
  it('', () => {});
});

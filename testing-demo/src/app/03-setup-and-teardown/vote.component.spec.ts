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

  it('should decrement totalVotes when downvotes', () => {
    // Arrange
    let component = new VoteComponent();
    // Act
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});

// Import the passwordSafety function from the "../passwordSafety" module
import { passwordSafety } from "../passwordSafety";

// Describe a test suite for the passwordSafety function
describe("passwordSafety", () => {
  // Test case 1: Password is less than 8 characters long
  it("Case 1: Password is less than 8 characters", () => {
    expect(passwordSafety("ppp")).toStrictEqual(
      "Password should more than 8 characters"
    );
  });

  // Test case 2: Password doesn't contain any number
  it("Case 2: Password doesn't contain any number", () => {
    expect(passwordSafety("hellomyfriend")).toStrictEqual(
      "Password should contain at least 1 number"  
    );
  });

  // Test case 3: Password doesn't contain any uppercase character
  it("Case 3: Password doesn't contain any uppercase character", () => {
    expect(passwordSafety("hellomyfriend123")).toStrictEqual(
      "Password should contain at least 1 uppercase character"  
    );
  });

  // Test case 4: Password doesn't contain any lowercase character
  it("Case 4: Password doesn't contain any lowercase character", () => {
    expect(passwordSafety("hellomyfriend123".toUpperCase())).toStrictEqual(
      "Password should contain at least 1 lowercase character"  
    );
  });

  // Test case 5: Password doesn't contain any special character
  it("Case 5: Password doesn't contain any special case character", () => {
    expect(passwordSafety("HelloMyFriend123")).toStrictEqual(
      "Password should contain at least 1 special character"  
    );
  });

  // Test case 6: Valid password
  it("Case 6: Valid Password", () => {
    expect(passwordSafety("Hello_My_Friend123")).toStrictEqual(
      "Password is safe (a little bit)"  
    );
  });

  //...
});

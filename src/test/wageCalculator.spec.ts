// Import the wageCalculator function from the "../wageCalculator" module
import { wageCalculator } from "../wageCalculator";

// Describe a test suite for the wageCalculator function
describe("wageCalculator", () => {
  // Test case 1: Not a leap year, working on Monday and Wednesday with no specified work level
  it("Case 1: Not a leap year, mon, wed, no work level", () => {
    expect(wageCalculator(2023, ["mon", "wed"])).toStrictEqual(100);
  });

  // Test case 2: Not a leap year, working on Monday and Tuesday with no specified work level
  it("Case 2: Not a leap year, mon, tue, no work level", () => {
    expect(wageCalculator(2023, ["mon", "tue"])).toStrictEqual(180);
  });

  // Test case 3: Not a leap year, working on Monday and Thursday with no specified work level
  it("Case 3: Not a leap year, mon, thu, no work level", () => {
    expect(wageCalculator(2023, ["mon", "thu"])).toStrictEqual(170);
  });

  // Test case 4: Not a leap year, working on Monday and Friday with no specified work level
  it("Case 4: Not a leap year, mon, fri, no work level", () => {
    expect(wageCalculator(2023, ["mon", "fri"])).toStrictEqual(310);
  });

  // Test case 5: Not a leap year, working on Monday and Saturday with no specified work level
  it("Case 5: Not a leap year, mon, sat, no work level", () => {
    expect(wageCalculator(2023, ["mon", "sat"])).toStrictEqual(100);
  });

  // Test case 6: Not a leap year, working on Monday and Sunday with no specified work level
  it("Case 6: Not a leap year, mon, sun, no work level", () => {
    expect(wageCalculator(2023, ["mon", "sun"])).toStrictEqual(300);
  });

  // Test case 7: Not a leap year, working on Monday and Tuesday with the work level as director
  it("Case 7: Not a leap year, mon, tue, work level as director", () => {
    expect(wageCalculator(2023, ["mon", "tue"], "director")).toStrictEqual(210);
  });

  // Test case 8: Not a leap year, working on Monday and Tuesday with the work level as manager
  it("Case 8: Not a leap year, mon, tue, work level as manager", () => {
    expect(wageCalculator(2023, ["mon", "tue"], "manager")).toStrictEqual(190);
  });

  // Test case 9: Not a leap year, invalid working day (not a day in the week) with no specified work level
  it("Case 9: Not a leap year, not a day in week, no work level", () => {
    expect(wageCalculator(2023, ["hello"])).toStrictEqual(0);
  });

  // Test case 10: A leap year, working on Monday and Tuesday with the work level as manager
  it("Case 10: A leap year, mon, tue, work level as manager", () => {
    expect(wageCalculator(2024, ["mon", "tue"], "manager")).toStrictEqual(190 * 1.2);
  });

  // Test case 11: A leap year, working on Monday and Friday with an undefined work level
  it("Case 11: A leap year, mon, fri, work level as undefined", () => {
    expect(wageCalculator(2024, ["mon", "fri"], undefined)).toStrictEqual(310 * 1.2);
  });

  // Test case 12: A leap year, working on Monday and Friday with the work level as manager
  it("Case 12: A leap year, mon, fri, work level as manager", () => {
    expect(wageCalculator(2024, ["mon", "fri"], "manager")).toStrictEqual(190 * 1.2);
  });

  //...
});

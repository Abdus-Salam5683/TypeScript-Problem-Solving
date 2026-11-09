//* Problem 1: Optional / Default parameter
const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};
//* Problem 2: Union type + Type narrowing (typeof)
const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  if (typeof input === "number") {
    return input * 10;
  }
  return input ? "Active" : "Inactive";
};
//* Problem 3: Readonly tuple
const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};
//* Problem 4: Generic + Rest parameters (...arrays)
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce<T[]>((combined, arr) => [...combined, ...arr], []);
};

//* Problem 5: Interface + filter (original array is not mutated)
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

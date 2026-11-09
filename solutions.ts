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

//* Problem 6: Generic with keyof constraint
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

//* Problem 7: Class, Inheritance, Access Modifier
class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
//* Problem 8: Promise + setTimeout
const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};
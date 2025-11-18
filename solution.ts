const formatValue = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") return input * 10;
  else if (typeof input === "boolean") return !input;
};

const getLength = (input: string | number[]) => {
  if (typeof input === "string") {
    return input.length;
  } else if (typeof input) {
    return input.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(usersName: string, usersAge: number) {
    this.name = usersName;
    this.age = usersAge;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

function filterByRating(
  bookItems: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return bookItems.filter(
    (bookItem: { title: string; rating: number }) => bookItem.rating >= 4
  );
}

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] => {
  return users.filter(
    (user: { id: number; name: string; email: string; isActive: boolean }) =>
      user.isActive === true
  );
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (bookInfo: Book) => {
  const availability = bookInfo.isAvailable ? "Yes" : "No";
  return `Title: ${bookInfo.title}, Author: ${bookInfo.author}, Published: ${bookInfo.publishedYear}, Available: ${availability}`;
};

const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
): (string | number)[] => {
  const combinedArray = [...array1, ...array2];

  const newArrayAfterContainingTheNewValues: (string | number)[] = [];
  for (let item of combinedArray) {
    let existingItemInArray = false;
    for (let uniqueArrayItem of newArrayAfterContainingTheNewValues) {
      if (uniqueArrayItem === item) {
        existingItemInArray = true;
        break;
      }
    }
    if (!existingItemInArray) {
      newArrayAfterContainingTheNewValues.push(item);
    }
  }
  return newArrayAfterContainingTheNewValues;
};

const calculateTotalPrice = (
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): { name: string; price: number; quantity: number; discount?: number }[] => {
  if (products.length === 0) return 0;

  return products.reduce((totalPrice, product) => {
    const basePrice = product.price * product.quantity;
    const finalPrice = product.discount
      ? basePrice - (basePrice * product.discount) / 100
      : basePrice;

    return totalPrice + finalPrice;
  }, 0);
};

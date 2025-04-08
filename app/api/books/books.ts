import { prisma } from "@/prisma/client";




const getBooks = async () => {
  const response = await fetch('/add-new-book', {
    method: 'GET',
  });
  const data = await response.json();
  return data;
}


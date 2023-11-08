import * as fs from 'fs';

interface User {
  id: number;
  name: string;
  email: string;
}

const apiClient = {
  fetchUser: async (userId: number): Promise<User> => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    return response.json();
  }
};

const generateTypescriptFile = () => {
  const fileContent = `
    import { apiClient } from './apiClient';
    const user = await apiClient.fetchUser(1);
    console.log(user);
  `;

  fs.writeFileSync('generatedApi.ts', fileContent);
}

generateTypescriptFile();
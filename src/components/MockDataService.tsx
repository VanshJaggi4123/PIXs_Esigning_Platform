// Mock data service - Frontend only, no backend integration

export interface User {
  id: string;
  email: string;
  role: 'employee' | 'hr';
  name: string;
  phone?: string;
  address?: string;
  hasCompletedFirstLogin: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SigningRequest {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'signed';
  createdAt: string;
  updatedAt: string;
  employeeId: string;
  employeeName: string;
  employeeEmail: string;
  createdBy: string;
  documents: Document[];
  signedAt?: string;
}

export interface Document {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

// Initial mock users
const INITIAL_USERS: User[] = [
  {
    id: '1',
    email: 'employee@company.com',
    role: 'employee',
    name: 'John Doe',
    phone: '+1234567890',
    address: '123 Main St, City, State',
    hasCompletedFirstLogin: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    email: 'hr@company.com',
    role: 'hr',
    name: 'Jane Smith',
    phone: '+1987654321',
    address: '456 Admin Ave, City, State',
    hasCompletedFirstLogin: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    email: 'newuser@company.com',
    role: 'employee',
    name: 'New User',
    hasCompletedFirstLogin: false,
    createdAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '4',
    email: 'test@example.com',
    role: 'employee',
    name: 'Test User',
    phone: '+1122334455',
    address: '789 Test Ave, Test City',
    hasCompletedFirstLogin: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    email: 'alice@company.com',
    role: 'employee',
    name: 'Alice Johnson',
    phone: '+1555666777',
    address: '321 Oak St, Springfield',
    hasCompletedFirstLogin: true,
    createdAt: '2024-01-05T00:00:00Z',
  }
];

// Initial mock signing requests
const INITIAL_REQUESTS: SigningRequest[] = [
  {
    id: '1',
    title: 'Employment Contract',
    description: 'Please review and sign your employment contract. This is a standard employment agreement outlining your role, responsibilities, and compensation.',
    status: 'pending',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    employeeId: '1',
    employeeName: 'John Doe',
    employeeEmail: 'employee@company.com',
    createdBy: '2',
    documents: [
      {
        id: 'doc1',
        name: 'employment-contract.pdf',
        url: '#',
        type: 'application/pdf',
        size: 1024000,
        uploadedAt: '2024-01-15T10:00:00Z',
      },
    ],
  },
  {
    id: '2',
    title: 'NDA Agreement',
    description: 'Non-disclosure agreement for sensitive information and company proprietary data.',
    status: 'signed',
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-12T09:15:00Z',
    employeeId: '1',
    employeeName: 'John Doe',
    employeeEmail: 'employee@company.com',
    createdBy: '2',
    documents: [
      {
        id: 'doc2',
        name: 'nda-agreement.pdf',
        url: '#',
        type: 'application/pdf',
        size: 512000,
        uploadedAt: '2024-01-10T14:30:00Z',
      },
    ],
    signedAt: '2024-01-12T09:15:00Z',
  },
  {
    id: '3',
    title: 'Employee Handbook Acknowledgment',
    description: 'Please acknowledge that you have received and will comply with the employee handbook and company policies.',
    status: 'pending',
    createdAt: '2024-01-20T11:00:00Z',
    updatedAt: '2024-01-20T11:00:00Z',
    employeeId: '3',
    employeeName: 'New User',
    employeeEmail: 'newuser@company.com',
    createdBy: '2',
    documents: [
      {
        id: 'doc3',
        name: 'employee-handbook.pdf',
        url: '#',
        type: 'application/pdf',
        size: 2048000,
        uploadedAt: '2024-01-20T11:00:00Z',
      },
    ],
  },
  {
    id: '4',
    title: 'Benefits Enrollment Form',
    description: 'Complete and sign your benefits enrollment form for health insurance and retirement plans.',
    status: 'pending',
    createdAt: '2024-01-18T09:00:00Z',
    updatedAt: '2024-01-18T09:00:00Z',
    employeeId: '1',
    employeeName: 'John Doe',
    employeeEmail: 'employee@company.com',
    createdBy: '2',
    documents: [
      {
        id: 'doc4',
        name: 'benefits-form.pdf',
        url: '#',
        type: 'application/pdf',
        size: 768000,
        uploadedAt: '2024-01-18T09:00:00Z',
      },
    ],
  },
  {
    id: '5',
    title: 'Remote Work Agreement',
    description: 'Agreement for remote work arrangements, including working hours and equipment usage.',
    status: 'signed',
    createdAt: '2024-01-08T16:00:00Z',
    updatedAt: '2024-01-09T10:30:00Z',
    employeeId: '4',
    employeeName: 'Test User',
    employeeEmail: 'test@example.com',
    createdBy: '2',
    documents: [
      {
        id: 'doc5',
        name: 'remote-work-agreement.pdf',
        url: '#',
        type: 'application/pdf',
        size: 645000,
        uploadedAt: '2024-01-08T16:00:00Z',
      },
    ],
    signedAt: '2024-01-09T10:30:00Z',
  },
  {
    id: '6',
    title: 'Code of Conduct',
    description: 'Company code of conduct and ethical guidelines for all employees.',
    status: 'signed',
    createdAt: '2024-01-05T11:00:00Z',
    updatedAt: '2024-01-06T14:20:00Z',
    employeeId: '1',
    employeeName: 'John Doe',
    employeeEmail: 'employee@company.com',
    createdBy: '2',
    documents: [
      {
        id: 'doc6',
        name: 'code-of-conduct.pdf',
        url: '#',
        type: 'application/pdf',
        size: 890000,
        uploadedAt: '2024-01-05T11:00:00Z',
      },
    ],
    signedAt: '2024-01-06T14:20:00Z',
  },
];

class MockDataService {
  private getStoredUsers(): User[] {
    const stored = localStorage.getItem('mock_users');
    if (stored) {
      return JSON.parse(stored);
    }
    this.setStoredUsers(INITIAL_USERS);
    return INITIAL_USERS;
  }

  private setStoredUsers(users: User[]) {
    localStorage.setItem('mock_users', JSON.stringify(users));
  }

  private getStoredRequests(): SigningRequest[] {
    const stored = localStorage.getItem('mock_requests');
    if (stored) {
      return JSON.parse(stored);
    }
    this.setStoredRequests(INITIAL_REQUESTS);
    return INITIAL_REQUESTS;
  }

  private setStoredRequests(requests: SigningRequest[]) {
    localStorage.setItem('mock_requests', JSON.stringify(requests));
  }

  // Simulate API delay
  private async delay(ms: number = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // User Management
  async getUsers(): Promise<User[]> {
    await this.delay(300);
    return this.getStoredUsers();
  }

  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    await this.delay(600);
    const users = this.getStoredUsers();
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    users.push(newUser);
    this.setStoredUsers(users);
    return newUser;
  }

  async updateUser(userId: string, userData: Partial<User>): Promise<User> {
    await this.delay(400);
    const users = this.getStoredUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) {
      throw new Error('User not found');
    }
    users[index] = { ...users[index], ...userData, updatedAt: new Date().toISOString() };
    this.setStoredUsers(users);
    return users[index];
  }

  async deleteUser(userId: string): Promise<void> {
    await this.delay(400);
    const users = this.getStoredUsers();
    const filtered = users.filter(u => u.id !== userId);
    this.setStoredUsers(filtered);
  }

  // Signing Requests
  async getSigningRequests(userId?: string): Promise<SigningRequest[]> {
    await this.delay(400);
    const requests = this.getStoredRequests();
    if (userId) {
      return requests.filter(r => r.employeeId === userId);
    }
    return requests;
  }

  async getSigningRequest(requestId: string): Promise<SigningRequest> {
    await this.delay(300);
    const requests = this.getStoredRequests();
    const request = requests.find(r => r.id === requestId);
    if (!request) {
      throw new Error('Request not found');
    }
    return request;
  }

  async createSigningRequest(requestData: {
    title: string;
    description: string;
    employeeId: string;
    documents: File[];
  }): Promise<SigningRequest> {
    await this.delay(800);
    const requests = this.getStoredRequests();
    const users = this.getStoredUsers();
    const employee = users.find(u => u.id === requestData.employeeId);

    const newRequest: SigningRequest = {
      id: Math.random().toString(36).substr(2, 9),
      title: requestData.title,
      description: requestData.description,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      employeeId: requestData.employeeId,
      employeeName: employee?.name || 'Unknown Employee',
      employeeEmail: employee?.email || 'unknown@company.com',
      createdBy: 'current-user-id',
      documents: requestData.documents.map((file, index) => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        url: '#',
        type: file.type,
        size: file.size,
        uploadedAt: new Date().toISOString(),
      })),
    };

    requests.push(newRequest);
    this.setStoredRequests(requests);
    return newRequest;
  }

  async deleteSigningRequest(requestId: string): Promise<void> {
    await this.delay(400);
    const requests = this.getStoredRequests();
    const filtered = requests.filter(r => r.id !== requestId);
    this.setStoredRequests(filtered);
  }

  async signDocument(requestId: string): Promise<SigningRequest> {
    await this.delay(600);
    const requests = this.getStoredRequests();
    const index = requests.findIndex(r => r.id === requestId);
    if (index === -1) {
      throw new Error('Request not found');
    }
    requests[index] = {
      ...requests[index],
      status: 'signed',
      signedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.setStoredRequests(requests);
    return requests[index];
  }
}

export const mockDataService = new MockDataService();
export default mockDataService;
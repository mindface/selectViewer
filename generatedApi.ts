export const GET_user = (data: {
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    }
  }
}) => {
  return fetch('/user', {
    method: 'GET',
    
  });
};

export const GET_info = (data: {
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    }
  }
}) => {
  return fetch('/info', {
    method: 'GET',
    
  });
};
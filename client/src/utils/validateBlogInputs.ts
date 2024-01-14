interface BlogInput {
  title: string;
  content: string;
}

type ValidationStatus = 'FAILED' | 'PASSED';

const validationResult = (status: ValidationStatus, msg: string) => {
  return { status, msg };
};

export const validateBlogInputs = (
  inputs: BlogInput
): { status: ValidationStatus; msg: string } => {
  // Validate Title

  if (!inputs['title'].trim()) {
    return { status: 'FAILED', msg: 'Title is required' };
  }

  // Validate Content

  if (!inputs['content'].trim()) {
    const contentLength = inputs['content'].length;
    if (contentLength > 2500) {
      return validationResult('FAILED', 'Max content limit is 2500 characters');
    }
    return validationResult('FAILED', 'Content cannot be empty');
  }
  return validationResult('PASSED', 'Inputs are valid');
};

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ArticleDetail from '../../Articles/components/ArticleDetailpage';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';



describe('ArticleDetail component', () => {
  test('renders ArticleDetail component', () => {
    render(<ArticleDetail />);
  });

  test('displays a loading spinner when loading is true', () => {
    const { getByTestId } = render(<ArticleDetail />);
    expect(getByTestId('spinner')).toBeInTheDocument();
  });

  test('displays article details when loading is false', () => {
    const { getByText } = render(<ArticleDetail />);
    expect(getByText('Hello')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
  });

  test('navigates to the article URL on "Read more" link click', () => {
     const { getByText } = render(<ArticleDetail  />);
     userEvent.click(getByText('Read more'));
    expect(window.location.href).toBeInTheDocument()
  });
});
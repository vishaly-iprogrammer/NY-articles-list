
import { render } from '@testing-library/react';
import ArticleCard from '../components/ArticleCard';

describe('ArticleCard', () => {
  test('renders ArticleCard component', () => {
    const { getByText } = render(<ArticleCard />);
    const articleCardElement = getByText('Sample Title');
    expect(articleCardElement).toBeInTheDocument();
  });

  test('displays the correct image in ArticleCard component', () => {
    const article = {
      id: 1,
      title: 'Hello', abstract: 'Description',
      media: [{ 'media-metadata': [{ url: 'sample-url' }] }],
    };
      render(<ArticleCard article={article} />);
      const { getByAltText } = render(<ArticleCard />);
    const imageElement = getByAltText('Article image');
    expect(imageElement).toHaveAttribute('src', 'sample-url');
  });

  test('displays the correct abstract in ArticleCard component', () => {
    const { getByText } = render(<ArticleCard />);
    const abstractElement = getByText('Sample Abstract');
    expect(abstractElement).toBeInTheDocument();
  });
});
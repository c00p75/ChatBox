import renderer from 'react-test-renderer';
import App from '../App';

it('Test if App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import LoadingLogo from 'components/LoadingLogo';
import Text, { TextLight, TextButtonLink } from 'components/Text';
import { Card, CardHeader, CardBody, CardFooter } from 'components/Card';
import { Table, TableThCell, TableCell, TableRow } from 'components/Table';
import TextField from 'components/Form/TextField';
import SelectField from 'components/Form/SelectField';
import SearchField from 'components/SearchField';
import Feedback from 'components/Feedback';

import { ReactComponent as IconSearch } from 'theme/icons/search.svg';
import { ReactComponent as IconUser } from 'theme/icons/user.svg';
import { ReactComponent as IconTimesCircle } from 'theme/icons/times-circle.svg';

const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

const TitleComponent = styled.h2`
  font-size: 1.2rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  margin: 24px 0 0;
  padding-top: 24px;
  border-top: 1px solid var(--colors-mischka);
`;

const Demo = styled.main`
  padding: 16px ${({ white }) => (white === true ? '16px' : '0')};
  margin-bottom: 16px;
  background-color: ${({ white }) => (white === true ? 'var(--colors-blank)' : 'transparent')};
`;

export default function Playground() {
  return (
    <Container>
      <Text size="h1" as="h1">
        Playground
      </Text>

      <TextLight as="p">
        These are some of the base components already built for you. You can{' '}
        <Text size="bodyBold">use and modify</Text> them as you need!
      </TextLight>
      <Link to="/">Go Home</Link>

      <TitleComponent>{`<Text>`}</TitleComponent>
      <Demo>
        <Text as="p" size="body">
          Everyday is a <Text size="bodyBold">new opportunity</Text> to grow at{' '}
          <TextButtonLink href="https://remote.com">Remote.com</TextButtonLink>
        </Text>
      </Demo>

      <TitleComponent>{`<Button>`}</TitleComponent>
      <Demo>
        <div>
          <Button>Continue</Button>
        </div>
        <br />
        <div>
          <Button as="a" href="https://remote.com">
            Link
          </Button>
        </div>
        <br />
        <div>
          <Button icon={<IconUser />}>Continue</Button>
        </div>
      </Demo>

      <TitleComponent>Search Field</TitleComponent>
      <Demo white>
        <SearchField placeholder="Search something" />
      </Demo>

      <TitleComponent>Feedback</TitleComponent>
      <Demo>
        <Feedback type="error">Cannot find any employee. Please try again.</Feedback>
      </Demo>

      <TitleComponent>{`<Card>`}</TitleComponent>
      <Demo>
        <Card>
          <CardHeader>Start with the CardHeader</CardHeader>
          <CardBody>This is the CardBody</CardBody>
          <CardFooter>And this is the CardFooter</CardFooter>
        </Card>
      </Demo>

      <TitleComponent>{`<Table>`}</TitleComponent>
      <Demo>
        <Card>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <TableThCell>Employee Name</TableThCell>
                  <TableThCell>Country</TableThCell>
                  <TableThCell align="right">Salary</TableThCell>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>Ana Morgado</TableCell>
                  <TableCell>Portugal</TableCell>
                  <TableCell align="right">EUR 5.000,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Kate Will</TableCell>
                  <TableCell>United States</TableCell>
                  <TableCell align="right">USD 10,000,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pierre Clark</TableCell>
                  <TableCell>France</TableCell>
                  <TableCell align="right">EUR 3.000,00</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Demo>

      <TitleComponent>{`<TextField>`}</TitleComponent>
      <Demo>
        <TextField label="Name" placeholder="e.g. Kim Fog" helper="First and last name" />

        <TextField
          label="E-mail"
          type="email"
          defaultValue="fakemail"
          placeholder="e.g. job@email.com"
          helper="Your personal e-mail"
          errorMsg="It does not sound like an e-mail"
        />
      </Demo>

      <TitleComponent>{`<SelectField>`}</TitleComponent>
      <Demo>
        <SelectField label="Food" defaultValue="" helper="Your favorite food">
          <option value="" hidden>
            Select food...
          </option>
          <option>Chinese</option>
          <option>Italian</option>
          <option>Mexican</option>
          <option>Other</option>
        </SelectField>
      </Demo>

      <TitleComponent>{`<LoadingLogo>`}</TitleComponent>
      <Demo>
        <LoadingLogo />
      </Demo>

      <TitleComponent>Icons</TitleComponent>
      <Demo>
        <IconSearch />
        <IconUser />
        <IconTimesCircle />
      </Demo>
    </Container>
  );
}

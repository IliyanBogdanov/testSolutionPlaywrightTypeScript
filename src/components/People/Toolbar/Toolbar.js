import { PeopleToolbarStyled, PeopleToolbarItemsStyled } from './Toolbar.styled';
import SearchField from 'components/SearchField';
import Filter from 'components/Filter';

export function PeopleToolbar(props) {
  const { nameFilter, setNameFilter, typeFilter, setTypeFilter } = props;
  return (
    <PeopleToolbarStyled>
      <div>
        <SearchField
          id="search-person"
          placeholder="Search by name…"
          value={nameFilter}
          setValue={setNameFilter}
        />
      </div>
      <div>
        <PeopleToolbarItemsStyled>
          <div>
            <Filter
              value={typeFilter}
              setValue={setTypeFilter}
              option="employee"
              data-testid="employee-filter"
            >
              Employee
            </Filter>
          </div>
          <div>
            <Filter
              value={typeFilter}
              setValue={setTypeFilter}
              option="contractor"
              data-testid="contractor-filter"
            >
              Contractor
            </Filter>
          </div>
        </PeopleToolbarItemsStyled>
      </div>
    </PeopleToolbarStyled>
  );
}

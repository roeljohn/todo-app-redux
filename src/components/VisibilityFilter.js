import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { filterTodo } from "../actions/filterTodo";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, filterTodo }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
                filterTodo(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { filterTodo }
)(VisibilityFilters);

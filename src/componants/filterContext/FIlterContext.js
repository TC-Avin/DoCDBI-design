// import React from 'react'

// const FilterContext = React.createContext()

// export const FilterProvider = FilterContext.Provider
// export const FilterConsumer = FilterContext.Consumer

// export default FilterContext

import React from 'react';

const defaultVal = {profile: {}} //Insert the default value here.
export const MainContext = React.createContext(defaultVal);
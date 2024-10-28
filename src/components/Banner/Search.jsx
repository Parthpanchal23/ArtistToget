import React from 'react'
import { HIRER } from '../../lib/Constant'

const Search = ({Role}) => {
  return (
    <div className="row">
                        {Role?Role:"Default"}
                    <div className="col-md-12">
                        <div className="intro-banner-search-form margin-top-95">
                            <div className="intro-search-field with-autocomplete">
                                <label for="autocomplete-input" className="field-title ripple-effect">Where?</label>
                                <div className="input-with-icon">
                                    <input id="autocomplete-input" type="text" placeholder="Online Job"/>
                                    <i className="icon-material-outline-location-on"></i>
                                </div>
                            </div>
                            <div className="intro-search-field">
                                <label for ="intro-keywords" className="field-title ripple-effect">{Role === HIRER ?"What you need done?":"What job you want?"}</label>
                                <input id="intro-keywords" type="text" placeholder={Role === HIRER ?"e.g. need singer":"Job Title or Keywords"}/>
                            </div>
                            {Role === HIRER &&
                            <div className="intro-search-field">
                                 <select className="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="All Categories" >
                                     <option>Admin Support</option>
                                     <option>Customer Service</option>
                                     <option>Data Analytics</option>
                                     <option>Design & Creative</option>
                                     <option>Legal</option>
                                     <option>Software Developing</option>
                                     <option>IT & Networking</option>
                                     <option>Writing</option>
                                     <option>Translation</option>
                                     <option>Sales & Marketing</option>
                                 </select>
                             </div>
}
                            <div className="intro-search-button">
                                <button className="button ripple-effect" >Search</button>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Search
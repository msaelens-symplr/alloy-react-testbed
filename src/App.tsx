import "./App.scss";
import {
    SymplStepper,
    SymplStep,
    SymplDataGrid,
    SymplDgRow,
    SymplDgHead,
    SymplDgHeaderCell,
    SymplDgCell,
    SymplDgBody,
    SymplDgFoot,
    SymplCard,
    SymplCheckBox,
    SymplCardHeader,
    SymplRadioGroup,
    SymplAccordion,
    SymplAccordionItem,
    SymplTextBadge,
    SymplCardActionLink,
    SymplHeader,
    SymplPaginator,
    SymplTab,
    SymplTabs,
    SymplAccountMenu,
    SymplMenu,
    SymplDropdown,
    SymplLabel,
    SymplInput,
    SymplCardContent,
    SymplPrimaryButton,
    SymplSecondaryButton,
    SymplDatepicker,
    SymplModal,
    SymplUtilityBar,
    SymplBreadcrumb,
    SymplTertiaryButton
} from "@symplr-ux/alloy-components/dist/react-bindings";
import { ISymplMenuItem } from "@symplr-ux/alloy-components/dist/types/model/SymplMenuItem.model";
import {
    ISymplBreadcrumbItem,
    ISymplDropdownOption,
    ISymplRadioGroupOption
} from "@symplr-ux/alloy-components/dist/types/model";

function App() {
    const learnerMenuItems: ISymplMenuItem[] = [
        { key: "Learners", text: "Learners" },
        { key: "AdminUsers", text: "Admin Users" },
        { key: "Whatever0", text: "Whatever" },
        { key: "Whatever1", text: "Whatever" },
        { key: "Whatever2", text: "Whatever" },
        { key: "Whatever3", text: "Whatever" },
        { key: "JobTitles", text: "JobTitles" }
    ];

    const menuItems: ISymplMenuItem[] = [
        { key: "learners", text: "Learners", subMenuProps: learnerMenuItems },
        { key: "elearning", text: "eLearning" },
        { key: "classroom", text: "Classroom" },
        { key: "competency", text: "Competency" },
        { key: "reports", text: "Reports" },
        { key: "utilities", text: "Utilities" }
    ];
    const dropDownOptions: ISymplDropdownOption[] = [
        { key: "open", text: "Open" },
        { key: "edit", text: "Edit" },
        { key: "share", text: "Share" },
        { key: "guess", text: "Guess" }
    ];

    const radioGroupOptions: ISymplRadioGroupOption[] = [
        { key: "open", text: "Open" },
        { key: "edit", text: "Edit" },
        { key: "share", text: "Share" },
        { key: "guess", text: "Guess" }
    ];

    const breadCrumbs: ISymplBreadcrumbItem[] = [
        { key: "localhost", text: "localhost" },
        { key: "pearners", text: "Learners" },
        { key: "people", text: "People" }
    ];

    return (
        <>
            <SymplHeader logo='/alloy-react-testbed/assets/small-symplr-logo.svg' environment='DEV'>
                <SymplMenu slot='menu' items={menuItems}></SymplMenu>
                <SymplUtilityBar slot='menu' showContextSwitcher showUtilities showOnlineHelp></SymplUtilityBar>
                <SymplAccountMenu slot='menu' name='über admin' />
            </SymplHeader>
            <SymplBreadcrumb items={breadCrumbs}></SymplBreadcrumb>
            <form>
                <SymplStepper activeIndex={0}>
                    <SymplStep name='Controls with Icons'>
                        <SymplAccordion header='Accordian'>
                            <SymplAccordionItem header='Buttons'>
                                <SymplPrimaryButton text='Search (disabled)' disabled icon='si-search'></SymplPrimaryButton>
                                &nbsp;
                                <SymplPrimaryButton text='Refresh' icon='si-refresh-cw'></SymplPrimaryButton>
                                &nbsp;
                                <SymplSecondaryButton text='Add Person' icon='si-user-plus'></SymplSecondaryButton>
                                &nbsp;
                                <SymplSecondaryButton text='Delete' icon='si-trash-2'></SymplSecondaryButton>
                                &nbsp;
                                <SymplSecondaryButton text='Folder' icon='si-folder-plus'></SymplSecondaryButton>
                                &nbsp;
                                <SymplTertiaryButton text='Tertiary Button' icon='si-folder-plus'></SymplTertiaryButton>
                                &nbsp;
                                <SymplTertiaryButton text='Close' icon='si-x'></SymplTertiaryButton>
                                &nbsp;
                            </SymplAccordionItem>
                        </SymplAccordion>
                    </SymplStep>
                    <SymplStep name='Headers'>
                        <h1>H1</h1>
                        <h2>H2</h2>
                        <h3>H3</h3>
                        <h4>H4</h4>
                        <h5>H5</h5>
                        <h6>H6</h6>
                    </SymplStep>
                    <SymplStep name='Small Controls' icon='si-search'>
                        <div>
                            <SymplModal id='modal' header='Header' header-icon='si-shield' visible={true}>
                                <div slot='content'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                                <div slot='footer'>Footer</div>
                            </SymplModal>
                            <SymplPrimaryButton text='Open Modal'></SymplPrimaryButton>
                        </div>
                        <SymplCard>
                            <SymplCardHeader>Datepickers</SymplCardHeader>
                            <SymplDatepicker label='Date Picker' required></SymplDatepicker>
                            <SymplDatepicker label='Date Picker' required></SymplDatepicker>
                        </SymplCard>
                        <SymplCard>
                            <SymplCardHeader>Dropdowns</SymplCardHeader>
                            <SymplDropdown
                                value={dropDownOptions[0].key}
                                label='SymplDropdown'
                                options={dropDownOptions}></SymplDropdown>
                            <SymplDropdown
                                value={dropDownOptions[0].key}
                                label='SymplDropdown'
                                options={dropDownOptions}></SymplDropdown>
                        </SymplCard>
                        <SymplCard>
                            <SymplCardHeader>Labels and Callouts</SymplCardHeader>
                            <SymplCardContent>
                                <SymplLabel text='Required Field' required></SymplLabel>
                                <SymplInput placeholder='placeholder'></SymplInput>
                            </SymplCardContent>
                        </SymplCard>
                        <SymplCard>
                            <SymplCardHeader>Checkboxes</SymplCardHeader>
                            <SymplCheckBox label='One'></SymplCheckBox>
                            <br />
                            <SymplCheckBox label='Two'></SymplCheckBox>
                        </SymplCard>
                        <SymplCard>
                            <SymplCardHeader>Radio Group</SymplCardHeader>
                            <SymplRadioGroup label='Choose One' options={radioGroupOptions}></SymplRadioGroup>
                        </SymplCard>
                    </SymplStep>
                    <SymplStep name='Labels and Controls' icon='si-file'>
                        <SymplTabs>
                            <SymplTab name='Learners'>
                                <div className='sympl-grid'>
                                    <div className='sympl-col-5'>
                                        <SymplLabel text='First Name' required></SymplLabel>
                                        <SymplInput placeholder='First Name'></SymplInput>
                                    </div>
                                    <div className='sympl-col-5'>
                                        <SymplLabel text='Last Name' required></SymplLabel>
                                        <SymplInput placeholder='Last Name'></SymplInput>
                                    </div>
                                    <div className='sympl-col-2'>
                                        <SymplLabel text='MI' required></SymplLabel>
                                        <SymplInput placeholder='MI'></SymplInput>
                                    </div>
                                    <br />
                                    <div className='sympl-col-4'>
                                        <SymplLabel text='Address 1' required></SymplLabel>
                                        <SymplInput placeholder='First Name'></SymplInput>
                                    </div>
                                    <div className='sympl-col-4'>
                                        <SymplLabel text='Address 2' required></SymplLabel>
                                        <SymplInput placeholder='Last Name'></SymplInput>
                                    </div>
                                    <div className='sympl-col-4'>
                                        <SymplLabel text='City' required></SymplLabel>
                                        <SymplInput placeholder='MI'></SymplInput>
                                    </div>
                                    <br />
                                    <div className='sympl-col-4'>
                                        <SymplLabel text='State' required></SymplLabel>
                                        <SymplInput placeholder='First Name'></SymplInput>
                                    </div>
                                    <div className='sympl-col-4'>
                                        <SymplLabel text='Zip' required></SymplLabel>
                                        <SymplInput placeholder='Last Name'></SymplInput>
                                    </div>
                                    <div className='sympl-col-4'>
                                        <SymplLabel text='MI' required></SymplLabel>
                                        <SymplInput placeholder='MI'></SymplInput>
                                    </div>
                                    <br />
                                </div>
                            </SymplTab>
                            <SymplTab name='Assigned Groups'></SymplTab>
                            <SymplTab name='Classroom'></SymplTab>
                            <SymplTab name='Courses'></SymplTab>
                        </SymplTabs>
                    </SymplStep>
                    <SymplStep name='Pagination' icon='si-palmtree'>
                        <SymplPaginator total={100} showSizeChanger showTotal></SymplPaginator>
                    </SymplStep>
                    <SymplStep name='Filters' icon='si-credit-card'>
                        <SymplCard>
                            <SymplCardHeader>
                                <i className='si-link si-sm'></i>
                                Links
                            </SymplCardHeader>
                            <SymplCardActionLink>Card Action</SymplCardActionLink>
                        </SymplCard>
                        <SymplCard>
                            <SymplCardHeader>
                                <i className='si-filter si-sm'></i>
                                Filters
                            </SymplCardHeader>
                            <SymplAccordion>
                                <SymplAccordionItem header='symplr Learning Client' expanded={true}>
                                    <SymplRadioGroup
                                        options={[
                                            { key: "yes", text: "Yes" },
                                            { key: "no", text: "No" }
                                        ]}></SymplRadioGroup>
                                </SymplAccordionItem>
                                <SymplAccordionItem header='Specialties' expanded={true}>
                                    <div className='checkbox-badge'>
                                        <SymplCheckBox label="What's New"></SymplCheckBox>
                                        <SymplTextBadge text='745' badgeStatus='info'></SymplTextBadge>
                                    </div>
                                    <div className='checkbox-badge'>
                                        <SymplCheckBox label='Ambulatory Evaluations'></SymplCheckBox>
                                        <SymplTextBadge text='32' badgeStatus='info'></SymplTextBadge>
                                    </div>
                                    <div className='checkbox-badge'>
                                        <SymplCheckBox label='Business'></SymplCheckBox>
                                        <SymplTextBadge text='442' badgeStatus='info'></SymplTextBadge>
                                    </div>
                                    <div className='checkbox-badge'>
                                        <SymplCheckBox label='CCU'></SymplCheckBox>
                                        <SymplTextBadge text='0' badgeStatus='info'></SymplTextBadge>
                                    </div>
                                    <div className='checkbox-badge'>
                                        <SymplCheckBox label='Clinical'></SymplCheckBox>
                                        <SymplTextBadge text='1001' badgeStatus='info'></SymplTextBadge>
                                    </div>
                                </SymplAccordionItem>
                            </SymplAccordion>
                        </SymplCard>
                    </SymplStep>
                    <SymplStep name='Grid' icon='si-verified'>
                        <SymplDataGrid title='Instructor-Led Classes' selectionMode='single' maxHeight='300px'>
                            <SymplDgHead sticky={true} slot='header'>
                                <SymplDgRow>
                                    <SymplDgHeaderCell>Class Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Course Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Session Title</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Start Date &amp; Time</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>End Date &amp; Time</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Location</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Room</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Class Notes</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Max Enroll</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Min Enroll</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Instructor ID</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Coordinator</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Originator</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Type</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Status</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Credit Types</SymplDgHeaderCell>
                                    <SymplDgHeaderCell>Credit Value</SymplDgHeaderCell>
                                </SymplDgRow>
                            </SymplDgHead>
                            <SymplDgBody slot='body'>
                                <SymplDgRow>
                                    <SymplDgCell>
                                        <a>Intro to SQL</a>
                                    </SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>301</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>
                                        <a>Intermediate SQL</a>
                                    </SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>10B</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Advanced SQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>22-b</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to graphQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>18</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to graphQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>18</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to graphQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>18</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to graphQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>18</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to graphQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>18</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to graphQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>18</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                                <SymplDgRow>
                                    <SymplDgCell>Intro to graphQL</SymplDgCell>
                                    <SymplDgCell>#2</SymplDgCell>
                                    <SymplDgCell>18</SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                    <SymplDgCell></SymplDgCell>
                                </SymplDgRow>
                            </SymplDgBody>
                            <SymplDgFoot slot='footer'>
                                <div></div>
                            </SymplDgFoot>
                        </SymplDataGrid>
                        <h4>Summary</h4>
                    </SymplStep>
                </SymplStepper>
            </form>
        </>
    );
}

export default App;

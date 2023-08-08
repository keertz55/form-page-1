import React, { useEffect, useState } from 'react'
import '../Styles/form.css'

export default function Form() {
    const [finalData, setfinaldata] = useState([])
    const [formdata, setFormdata] = useState({
        mail: "",
        firstname: "",
        lastname: "",
        dob: "",
        mobile: "",
        city: "",
        postcode: ""
    })
    const [searchQuery, setSearchQuery] = useState('');

    const [formError, setFormError] = useState({})

    const handleform = (data) => {
        switch (data.target.id) {
            case 'firstname':
                setFormdata(prev => ({
                    ...prev,
                    firstname: data.target.value
                }))
                break;
            case 'lastname':
                setFormdata(prev => ({
                    ...prev,
                    lastname: data.target.value
                }))
                break;
            case 'mail':
                setFormdata(prev => ({
                    ...prev,
                    mail: data.target.value
                }))
                break;
            case 'dob':
                setFormdata(prev => ({
                    ...prev,
                    dob: data.target.value
                }))
                break;
            case 'mobile':
                setFormdata(prev => ({
                    ...prev,
                    mobile: data.target.value
                }))
                break;
            case 'city':
                setFormdata(prev => ({
                    ...prev,
                    city: data.target.value
                }))
                break;
            case 'postcode':
                setFormdata(prev => ({
                    ...prev,
                    postcode: data.target.value
                }))
                break;
            default:
                break;
        }
    }

    const validateForm = () => {
        let err = {}

        if (formdata.firstname === '') {
            err.firstname = 'First Name is Required!'
        }
        if (formdata.lastname === '') {
            err.lastname = 'Last Name is Required!'
        }
        if (formdata.mail === '') {
            err.mail = 'Email  is Required!'
        }
        else {
            let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
            if (!regex.test(formdata.mail)) {
                err.mail = 'Email is not Valid'
            }
        }
        if (formdata.dob === '') {
            err.dob = 'DOB is Required!'
        } else {
            var dob = new Date("20/06/2002");
            var now = new Date();
            if (now - dob > 568024668000) {
                err.dob = "Older than 18 years"
            }
        }

        if (formdata.mobile === '') {
            err.mobile = 'Mobile Number is Required!'
        } else {
            if (formdata.mobile.length < 10) {
                err.mobile = 'Mobile Number Should be 10 Numbers'
            }
        }
        if (formdata.city === '') {
            err.city = 'City is Required!'
        }
        if (formdata.postcode === '') {
            err.postcode = 'Zipcode is Required!'
        } else {
            if (formdata.postcode.length < 6) {
                err.postcode = 'Zipcode Should be 6 Numbers'
            }
        }
        setFormError({ ...err })

        return Object.keys(err).length < 1;
    }
    const submitData = () => {
        let isValid = validateForm()

        if (isValid) {
            alert("Submitted")
            window.location.reload();
            var newData = finalData;
            newData.push(formdata)
            setfinaldata((prevform) => ([{
                ...prevform,
                finalData: []
            }]))
            setfinaldata((prevform) => ([{
                ...prevform,
                finalData: newData
            }]))
            localStorage.setItem('finaldata', JSON.stringify(newData))
        }
        else {
            alert("In Valid Form")

        }


    }

    useEffect(() => {
        var listData = localStorage.getItem('finaldata')
        if (listData) {
            setfinaldata(JSON.parse(listData))
        }
    }, []);

    // useEffect(() => {
    //     submitData();
    // }, []);

    //     finalData.map((e) => {
    //     //  return
    //   })

    // const handlesearch = () => {
    //     // var searchInput = document.getElementById('searchInput');
    //     // var table = document.getElementById('dataTable');
    //     // var rows = table.getElementsByTagName('tr');

    //     // searchInput.addEventListener('input', function () {
    //     //     var filter = searchInput.value.toLowerCase();
    //     //     for (var i = 0; i < rows.length; i++) {
    //     //         var rowData = rows[i].textContent.toLowerCase();
    //     //         if (rowData.indexOf(filter) > -1) {
    //     //             rows[i].style.display = '';
    //     //         } else {
    //     //             rows[i].style.display = 'none';
    //     //         }
    //     //     }
    //     // });

    // }

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const filteredData = finalData?.filter((row) =>
        row.firstname.toLowerCase().includes(searchQuery.toLowerCase()
        )
    );

    return (
        <div className='container row'>
            <div className='column'>
                <div className='form d-flex'>
                    <h2> ADD USERS</h2>
                    <input type='text' placeholder='Enter Your Firstname' id='firstname' onChange={(e) => handleform(e)} />
                    <span className='non-valid'>{formError.firstname} </span>
                    <input type='text' placeholder='Enter Your Lastname' id='lastname' onChange={(e) => handleform(e)} />
                    <span className='non-valid'>{formError.lastname} </span>
                    <input type='email' placeholder='Enter Your Email' id='mail' onChange={(e) => handleform(e)} />
                    <span className='non-valid'>{formError.mail} </span>
                    <input type='date' placeholder='Enter Your DOB' id='dob' onChange={(e) => handleform(e)} />
                    <span className='non-valid'>{formError.dob} </span>
                    <input type='text' placeholder='Enter Your Mobile' id='mobile' onChange={(e) => handleform(e)} />
                    <span className='non-valid'>{formError.mobile} </span>
                    <select name="city" id="city" className='select' onChange={(e) => handleform(e)}>
                        <option value=""></option>
                        <option value="Ariyalur">Ariyalur</option>
                        <option value="Chengalpattu">Chengalpattu</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Cuddalore">Cuddalore</option>
                        <option value="Dharmapuri">Dharmapuri</option>
                        <option value="Dindigul">Dindigul</option>
                        <option value="Erode">Erode</option>
                        <option value="Kallakurichi">Kallakurichi</option>
                        <option value="Kancheepuram">Kancheepuram</option>
                        <option value="Karur">Karur</option>
                        <option value="Krishnagiri">Krishnagiri</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Mayiladuthurai">Mayiladuthurai</option>
                        <option value="Nagapattinam">Nagapattinam</option>
                        <option value="Kanniyakumari">Kanniyakumari</option>
                        <option value="Namakkal">Namakkal</option>
                        <option value="Perambalur">Perambalur</option>
                        <option value="Pudukottai">Pudukottai</option>
                        <option value="Ramanathapuram">Ramanathapuram</option>
                        <option value="Ranipet">Ranipet</option>
                        <option value="Sivagangai">Sivagangai</option>
                        <option value="Salem">Salem</option>
                        <option value="Tenkasi">Tenkasi</option>
                        <option value="Thanjavur">Thanjavur</option>
                        <option value="Theni">Theni</option>
                        <option value="Thiruvallur">Thiruvallur </option>
                        <option value="Thiruvarur">Thiruvarur</option>
                        <option value="Thoothukudi">Thoothukudi</option>
                        <option value="Trichirappalli">Trichirappalli</option>
                        <option value="Thirunelveli">Thirunelveli</option>
                        <option value="Tirupathur">Tirupathur</option>
                        <option value="Tiruvannamalai">Tiruvannamalai</option>
                        <option value="The Nilgiris">The Nilgiris</option>
                        <option value="Vellore">Vellore</option>
                        <option value="Viluppuram">Viluppuram</option>
                        <option value="Virudhunagar">Virudhunagar </option>
                    </select>
                    <span className='non-valid'>{formError.city} </span>
                    <input type='text' placeholder='Enter Your Zipcode' id='postcode' onChange={(e) => handleform(e)} />
                    <span className='non-valid'>{formError.postcode} </span>
                    <div className='d-flex '>
                        <a href="/#" className="btn" onClick={() => submitData()}>Submit</a>
                    </div>
                </div>

            </div>
            <div className='column'>
                <input className="search-content" type="text" id='searchInput' placeholder="Search" onChange={handleSearchInputChange} />

                <table id="dataTable">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Mobile</th>
                        <th>City</th>
                        <th>Zipcode</th>
                    </tr>
                    <tbody>
                        {filteredData?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item?.firstname}</td>
                                    <td>{item?.mail}</td>
                                    <td>{item?.dob}</td>
                                    <td>{item?.mobile}</td>
                                    <td>{item?.city}</td>
                                    <td>{item?.postcode}</td>
                                </tr>

                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>

    )
}

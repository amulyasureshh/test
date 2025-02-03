



import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaArrowDown, FaBroadcastTower, FaFileDownload, FaSortDown} from 'react-icons/fa';
import { ClassicSpinner } from 'react-spinners-kit';


function DataTable1() {

    const column=[
        {
            name:"roll_no",
            selector:row=>row.id,
            sortable:true,
            center:true,
            reorder:true,
            maxWidth:"90px"
        },
        {
            name:"Name",
            selector:row=>row.name,
            sortable:true,
            center:true,
            reorder:true,
            wrap:true
        },
        {
            name:"Email",
            selector:row=>row.email,
            sortable:true,
            center:true,
            reorder:true
        }
    ]


    

    const [x,setx] =useState([]);
    const [loading,setloading]=useState(true);


    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")  // use controller url 
        .then((response)=>{
            setx(response.data)
            setloading(false)
        })
         

    },[])

console.log(x);

const cssstyle={
    rows:{
        style:{
            backgroundColor:"blue",
            fontSize:"20px"
        }
    },

    cells:{
        style:{
            borderStyle:"solid",
            borderWidth:"4px",
            borderColor:"green"
        }
    },
    headCells:{
        style:{
            backgroundColor:"red",
            fontSize:"20px"
        }
    },
    pagination:{
        style:{
            backgroundColor:"orange",
            fontSize:"20px"
        }
    }
}

const z=[
    {
        when:row=>row.id>5,
        style:{
            backgroundColor:"pink",
        }
    }
]

const exportColumns = column.map((i) => i.name);

   const handleDownloadPdf = async () => {
    const doc = new jsPDF();
    doc.autoTable({
       head: [exportColumns],
      body: x.map((item) => column.map((i) => i.selector(item))),
    });
     doc.save('datatable.pdf');
  };

  return (
    <div>

<button onClick={handleDownloadPdf}><FaFileDownload/></button>

        <div className='grid grid-cols-3'>
            
            <div className='col-span-1'></div>
            <div className='col-span-2'></div>
            <div className='col-span-3'>
    
        <DataTable columns={column} data={x}

        customStyles={cssstyle}
         sortIcon={<FaArrowDown/>}
         pagination
         paginationRowsPerPageOptions={[2,5,8,10]}

         progressPending={loading}
        
        progressComponent={<ClassicSpinner size={30} color="blue"/>}
        highlightOnHover
        pointerOnHover

        conditionalRowStyles={z}
        theme="dark"

        fixedHeader
        // fixedHeaderScrollHeight='400px'

         defaultSortFieldId={1}
         defaultSortAsc

         title="student table"
          /> 

</div>
</div>


    </div>
  );
}

export default DataTable1;

const paginationContainer = document.getElementById('pagination');

let itemsPerPage = 10;   // 한페이지에 출력할 데이터 개수
let currentPage;        // 현재 선택된 페이지
let totalItems;         // 출력할 데이터 총 개수
let totalPages;         // 총 페이지 개수
let pagesPerGroup;      // 한 페이지 그룹에 페이지 개수
let searchList = [];    // 검색조회 리스트

window.onload = function() {
    // init(); //초기화
    // displayPagination(1); //초기페이지
}

// 초기화
function init(){
    currentPage = 1;
    totalItems = 1;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    pagesPerGroup = 5;
}

//현재 페이지 데이터출력
function displayData(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    let data = '';
    
    const dataBody = document.querySelector('.table_list tbody');
    dataBody.innerHTML ='';

    if(jsonDataList == null) return;

    for (let i = start; i < end && i < totalItems; i++) {
    
        const row = document.createElement('tr');
        row.addEventListener("click", (e)=>{
            loadAndExecuteModule('bnk_fds_010101_modify', 'bnk_fds/bnk_fds_010101_modify.html', '../js/bnk_fds/bnk_fds_010101_modify.js');

        });

        row.innerHTML = `
            <td>${i+1}</td>
            <td>${searchList[i].menu_id}</td>
            <td>${searchList[i].menu_name}</td>
            <td>${searchList[i].user}</td>
            <td>${searchList[i].date}</td>
        `;
        
        dataBody.appendChild(row);
    }
}


// 페이징 넘버 생성
function displayPagination(page) {
    totalPages = Math.ceil(totalItems / itemsPerPage);

    let pagination = '';
    let currentGroup = Math.ceil(page / pagesPerGroup);
    let startPage = (currentGroup - 1) * pagesPerGroup + 1;
    let endPage = Math.min(currentGroup * pagesPerGroup, totalPages);
    

    let pageing_info =
    {
        "총페이지개수":totalPages,
        "현재페이지": currentGroup,
        "시작페이지": startPage,
        "마지막페이지": endPage
    }

    console.log(pageing_info);

    pagination += `<button onclick="goToPage(1)">&lt;&lt;</button>`;
    pagination += `<button onclick="goToPreviousGroup(${currentGroup})" ${currentGroup === 1 ? 'disabled' : ''}>&lt;</button>`;

    for (let i = startPage; i <= endPage; i++) {
        pagination += `<button onclick="goToPage(${i})" class="${i === page ? 'active' : ''}">${i}</button>`;
    }

    pagination += `<button onclick="goToNextGroup(${currentGroup})" ${currentGroup * pagesPerGroup >= totalPages ? 'disabled' : ''}>&gt;</button>`;
    pagination += `<button onclick="goToPage(${totalPages})">&gt;&gt;</button>`;

    paginationContainer.innerHTML = pagination;

    displayData(page);
}

//페이지 이동
function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    displayData(currentPage);
    displayPagination(currentPage);
}
//이전 그룹페이지
function goToPreviousGroup(currentGroup) {
    if (currentGroup > 1) {
        goToPage((currentGroup - 2) * pagesPerGroup + 1);
    }
}
//다음 그룹페이지
function goToNextGroup(currentGroup) {
    if (currentGroup * pagesPerGroup < totalPages) {
        goToPage(currentGroup * pagesPerGroup + 1);
    }
}        

// 검색 조회
function select_list()
{
    let searchText = document.getElementById("search_text").value.trim();
    

    searchList= [];

    for(i=0; i<jsonDataList.length; i++){

        

        if(jsonDataList[i].menu_id.includes(searchText) || jsonDataList[i].menu_name.includes(searchText)){
            console.log(jsonDataList[i].menu_name.includes(searchText));

            searchList.push(jsonDataList[i]);
        }
    }
    
    console.log(searchList);
    
    
    totalItems=searchList.length;
    displayPagination(currentPage);
}

function file_down()
{

}

function file_upload()
{

}
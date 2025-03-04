const paginationContainer = document.getElementById('pagination');

let itemsPerPage = 10;   // 한페이지에 출력할 데이터 개수
let currentPage;        // 현재 선택된 페이지
let totalItems;         // 출력할 데이터 총 개수
let totalPages;         // 총 페이지 개수
let pagesPerGroup;      // 한 페이지 그룹에 페이지 개수

let jsonDataList;

window.onload = function() {
    init(); //초기화
    displayPagination(1); //초기페이지
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
        
        row.innerHTML = `
            <td>${jsonDataList[i].number}</td>
            <td>${jsonDataList[i].menu_id}</td>
            <td>${jsonDataList[i].menu_name}</td>
            <td>${jsonDataList[i].user}</td>
            <td>${jsonDataList[i].date}</td>
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

function select_list()
{
    jsonDataList = [
            {"number":1, "menu_id":"bit_trn_000000_1", "menu_name":"이체",                 "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":2, "menu_id":"cmc_bcs_010000_1", "menu_name":"뱅크사인 이용신청",     "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":3, "menu_id":"cmc_bcs_040000_1", "menu_name":"뱅크사인 인증수단관리",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":4, "menu_id":"cmc_bio_010200_1", "menu_name":"뱅크사인 이용해지",     "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":5, "menu_id":"cmc_bio_010300_1", "menu_name":"바이오 홍채인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":6, "menu_id":"cmc_bio_020200_1", "menu_name":"바이오 홍채인증 해지",  "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":7, "menu_id":"cmc_bcs_030000_1", "menu_name":"바이오 얼굴인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":8, "menu_id":"bit_trn_000000_1", "menu_name":"이체",                 "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":9, "menu_id":"cmc_bcs_010000_1", "menu_name":"뱅크사인 이용신청",     "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":10, "menu_id":"cmc_bcs_040000_1", "menu_name":"뱅크사인 인증수단관리",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":11, "menu_id":"cmc_bio_010200_1", "menu_name":"뱅크사인 이용해지",     "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":12, "menu_id":"cmc_bio_010300_1", "menu_name":"바이오 홍채인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":13, "menu_id":"cmc_bio_020200_1", "menu_name":"바이오 홍채인증 해지",  "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":14, "menu_id":"cmc_bcs_030000_1", "menu_name":"바이오 얼굴인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":15, "menu_id":"bit_trn_000000_1", "menu_name":"이체",                 "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":16, "menu_id":"cmc_bcs_010000_1", "menu_name":"뱅크사인 이용신청",     "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":17, "menu_id":"cmc_bcs_040000_1", "menu_name":"뱅크사인 인증수단관리",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":18, "menu_id":"cmc_bio_010200_1", "menu_name":"뱅크사인 이용해지",     "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":19, "menu_id":"cmc_bio_010300_1", "menu_name":"바이오 홍채인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":20, "menu_id":"cmc_bio_020200_1", "menu_name":"바이오 홍채인증 해지",  "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":21, "menu_id":"cmc_bcs_030000_1", "menu_name":"바이오 얼굴인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":22, "menu_id":"bit_trn_000000_1", "menu_name":"이체",                 "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":23, "menu_id":"cmc_bcs_010000_1", "menu_name":"뱅크사인 이용신청",     "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":24, "menu_id":"cmc_bcs_040000_1", "menu_name":"뱅크사인 인증수단관리",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":25, "menu_id":"cmc_bio_010200_1", "menu_name":"뱅크사인 이용해지",     "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":26, "menu_id":"cmc_bio_010300_1", "menu_name":"바이오 홍채인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":27, "menu_id":"cmc_bio_020200_1", "menu_name":"바이오 홍채인증 해지",  "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":28, "menu_id":"cmc_bcs_030000_1", "menu_name":"바이오 얼굴인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":29, "menu_id":"bit_trn_000000_1", "menu_name":"이체",                 "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":30, "menu_id":"cmc_bcs_010000_1", "menu_name":"뱅크사인 이용신청",     "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":31, "menu_id":"cmc_bcs_040000_1", "menu_name":"뱅크사인 인증수단관리",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":32, "menu_id":"cmc_bio_010200_1", "menu_name":"뱅크사인 이용해지",     "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":33, "menu_id":"cmc_bio_010300_1", "menu_name":"바이오 홍채인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":34, "menu_id":"cmc_bio_020200_1", "menu_name":"바이오 홍채인증 해지",  "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":35, "menu_id":"cmc_bcs_030000_1", "menu_name":"바이오 얼굴인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":36, "menu_id":"bit_trn_000000_1", "menu_name":"이체",                 "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":37, "menu_id":"cmc_bcs_010000_1", "menu_name":"뱅크사인 이용신청",     "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":38, "menu_id":"cmc_bcs_040000_1", "menu_name":"뱅크사인 인증수단관리",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":39, "menu_id":"cmc_bio_010200_1", "menu_name":"뱅크사인 이용해지",     "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":40, "menu_id":"cmc_bio_010300_1", "menu_name":"바이오 홍채인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"},
            {"number":41, "menu_id":"cmc_bio_020200_1", "menu_name":"바이오 홍채인증 해지",  "user":"S22599",    "date":"2025.02.05 14:35:19"},
            {"number":42, "menu_id":"cmc_bcs_030000_1", "menu_name":"바이오 얼굴인증 등록",  "user":"admin",     "date":"2025.02.05 14:35:19"}
        ]
    totalItems=jsonDataList.length;
    displayPagination(currentPage);
}

function file_down()
{

}

function file_upload()
{

}
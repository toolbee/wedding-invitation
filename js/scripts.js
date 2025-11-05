/*!
* 감성적인 모바일 청첩장 JavaScript
* Copyright 2024
*/

// 페이지 로드 시 부드러운 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    // 히어로 섹션 페이드인 효과
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
    }, 500);

    // 스크롤 애니메이션 초기화
    initScrollAnimations();
    
    // 부드러운 스크롤 효과
    initSmoothScroll();
});

// 스크롤 애니메이션 초기화
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // fade-in 클래스를 가진 모든 요소 관찰
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// 부드러운 스크롤 효과
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 링크 복사 기능 (개선된 버전)
function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard && window.isSecureContext) {
        // 모던 브라우저용 Clipboard API
        navigator.clipboard.writeText(url).then(() => {
            showNotification('링크가 복사되었습니다. 널리널리 퍼뜨려주세요 💕', 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(url);
        });
    } else {
        // 구형 브라우저용 fallback
        fallbackCopyTextToClipboard(url);
    }
}

// 구형 브라우저용 복사 기능
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('링크가 복사되었습니다. 널리널리 퍼뜨려주세요 💕', 'success');
    } catch (err) {
        showNotification('링크 복사에 실패했습니다.', 'error');
    }
    
    document.body.removeChild(textArea);
}

// 신부 계좌번호 복사 (개선된 버전)
function brideAccountNumber() {
    const brideAccount = '1002-744-824938 (우리은행)';
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(brideAccount).then(() => {
            showNotification('신부의 계좌번호가 복사되었습니다.\n'+ brideAccount, 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(brideAccount);
        });
    } else {
        fallbackCopyTextToClipboard(brideAccount);
    }
}

// 신랑 계좌번호 복사 (개선된 버전)
function groomAccountNumber() {
    const groomAccount = '490702-01-141125 (KB국민은행)';
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(groomAccount).then(() => {
            showNotification('신랑의 계좌번호가 복사되었습니다.\n' + groomAccount, 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(groomAccount);
        });
    } else {
        fallbackCopyTextToClipboard(groomAccount);
    }
}

// 신랑 아버님 계좌번호 복사 (개선된 버전)
function groomsFatherAccountNumber() {
    const groomsFatherAccount = '013920-02-207667 (우체국)';
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(groomsFatherAccount).then(() => {
            showNotification('계좌번호가 복사되었습니다.\n' + groomsFatherAccount, 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(groomsFatherAccount);
        });
    } else {
        fallbackCopyTextToClipboard(groomsFatherAccount);
    }
}

// 신랑 어머님 계좌번호 복사 (개선된 버전)
function groomsMotherAccountNumber() {
    const groomsMotherAccount = '1002-330-853632 (우리은행)';
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(groomsMotherAccount).then(() => {
            showNotification('계좌번호가 복사되었습니다.\n' + groomsMotherAccount, 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(groomsMotherAccount);
        });
    } else {
        fallbackCopyTextToClipboard(groomsMotherAccount);
    }
}

// 신부 아버님 계좌번호 복사 (개선된 버전)
function bridesFatherAccountNumber() {
    const bridesFatherAccount = '3333-07-0912721 (카카오뱅크)';
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(bridesFatherAccount).then(() => {
            showNotification('계좌번호가 복사되었습니다.\n' + bridesFatherAccount, 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(bridesFatherAccount);
        });
    } else {
        fallbackCopyTextToClipboard(bridesFatherAccount);
    }
}

// 신부 어머님 계좌번호 복사 (개선된 버전)
function bridesMotherAccountNumber() {
    const bridesMotherAccount = '100082-52-123839 (농협은행)';
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(bridesMotherAccount).then(() => {
            showNotification('계좌번호가 복사되었습니다.\n' + bridesMotherAccount, 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(bridesMotherAccount);
        });
    } else {
        fallbackCopyTextToClipboard(bridesMotherAccount);
    }
}

// 알림 표시 함수
function showNotification(message, type = 'info') {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

    // 스타일 추가
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 0.9rem;
        line-height: 1.4;
    `;

    // 알림 내용 스타일
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;

    // 닫기 버튼 스타일
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
    `;

    notification.querySelector('.notification-close').addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255,255,255,0.2)';
    });

    notification.querySelector('.notification-close').addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });

    document.body.appendChild(notification);

    // 3초 후 자동 제거
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 3000);
}

// 카카오톡 공유하기 (개선된 버전)
function kakaoShare() {
    // 카카오 SDK가 로드되었는지 확인
    if (typeof Kakao === 'undefined') {
        // 카카오 SDK 로드
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.onload = function() {
            initKakaoShare();
        };
        document.head.appendChild(script);
    } else {
        initKakaoShare();
    }
}

// 카카오 공유 초기화 및 실행
function initKakaoShare() {
    try {
    Kakao.init('YOUR APP KEY');
        
        if (Kakao.isInitialized()) {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
                    title: '지훈🤍민지 결혼합니다.',
                    description: '2025.12.06 오후 3시\n흑석동성당',
        imageUrl: 'https://github.com/jaeyun95/jaeyun95.github.io/blob/main/assets/img/main.jpg?raw=true',
        link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
        },
        },
        buttons: [
        {
            title: '모바일 청첩장 보기',
            link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
            },
        },
        ],
        installTalk: true,
            });
        } else {
            showNotification('카카오톡 공유를 초기화할 수 없습니다.', 'error');
        }
    } catch (error) {
        showNotification('카카오톡 공유에 실패했습니다.', 'error');
    }
}

// 접기/펼치기 기능 (개선된 버전)
function toggleFoldable() {
    const content = document.querySelector('.foldable-content');
    const button = document.querySelector('[onclick="toggleFoldable(); return false;"]');

    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
        content.style.animation = 'slideDown 0.3s ease-out';
        if (button) {
            button.innerHTML = '<i class="fa-solid fa-users"></i> 혼주 연락처 <i class="fa-solid fa-chevron-up"></i>';
        }
    } else {
        content.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => {
        content.style.display = 'none';
        }, 300);
        if (button) {
            button.innerHTML = '<i class="fa-solid fa-users"></i> 혼주 연락처 <i class="fa-solid fa-chevron-down"></i>';
        }
    }
}

function toggleFoldable2() {
    const content = document.querySelector('.foldable-content2');
    const button = document.querySelector('[onclick="toggleFoldable2(); return false;"]');

    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
        content.style.animation = 'slideDown 0.3s ease-out';
        if (button) {
            button.innerHTML = '<i class="fa-solid fa-users"></i> 혼주 연락처 <i class="fa-solid fa-chevron-up"></i>';
        }
    } else {
        content.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => {
        content.style.display = 'none';
        }, 300);
        if (button) {
            button.innerHTML = '<i class="fa-solid fa-users"></i> 혼주 연락처 <i class="fa-solid fa-chevron-down"></i>';
        }
    }
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }

    .notification-close:hover {
        background-color: rgba(255,255,255,0.2) !important;
    }
`;
document.head.appendChild(style);

// 페이지 성능 최적화
window.addEventListener('load', function() {
    // 이미지 지연 로딩
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// 터치 이벤트 최적화 (모바일)
document.addEventListener('touchstart', function() {}, {passive: true});
document.addEventListener('touchmove', function() {}, {passive: true});

// 갤러리 모달 기능
let currentGalleryIndex = 0;
const galleryImages = [
    'assets/img/NGT00036-3.jpg',
    'assets/img/NGT00171-4.jpg',
    'assets/img/NGT00194-3.jpg',
    'assets/img/NGT00550-1.jpg',
    'assets/img/NGT00860-3.jpg',
    'assets/img/NGT01006-3.jpg',
    'assets/img/NGT01308-2.jpg',
    'assets/img/NGT01458-4.jpg',
    'assets/img/NGT01673-3.jpg',
    'assets/img/NGT01725-6.jpg'
];

function openGalleryModal(index) {
    currentGalleryIndex = index;
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('galleryModalImage');
    const modalCounter = document.getElementById('galleryModalCounter');
    
    modalImage.src = galleryImages[index];
    modalCounter.textContent = `${index + 1} / ${galleryImages.length}`;
    modal.classList.add('active');
    
    // body 스크롤 방지
    document.body.style.overflow = 'hidden';
    
    // ESC 키로 닫기
    document.addEventListener('keydown', handleGalleryKeydown);
    
    // 이미지 로드 후 줌 블러 재적용
    modalImage.onload = function() {
        if (typeof window.applyZoomBlur === 'function') {
            window.applyZoomBlur();
        }
    };
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    
    // body 스크롤 복원
    document.body.style.overflow = '';
    
    // 키보드 이벤트 제거
    document.removeEventListener('keydown', handleGalleryKeydown);
}

function prevGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryModal();
}

function nextGalleryImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    updateGalleryModal();
}

function updateGalleryModal() {
    const modalImage = document.getElementById('galleryModalImage');
    const modalCounter = document.getElementById('galleryModalCounter');
    
    modalImage.src = galleryImages[currentGalleryIndex];
    modalCounter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;
    
    // 줌 블러 재적용 (모달 이미지에도 적용)
    setTimeout(function() {
        if (typeof window.applyZoomBlur === 'function') {
            window.applyZoomBlur();
        }
    }, 100);
}

function handleGalleryKeydown(e) {
    if (e.key === 'Escape') {
        closeGalleryModal();
    } else if (e.key === 'ArrowLeft') {
        prevGalleryImage();
    } else if (e.key === 'ArrowRight') {
        nextGalleryImage();
    }
}

// 모달 배경 클릭 시 닫기
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            // 모달 배경을 클릭한 경우에만 닫기
            if (e.target === modal) {
                closeGalleryModal();
            }
        });
    }
});
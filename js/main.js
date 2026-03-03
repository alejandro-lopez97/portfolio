// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 32, 44, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.4)';
        navbar.style.borderBottom = '1px solid #4a5568';
    } else {
        navbar.style.background = 'rgba(26, 32, 44, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        navbar.style.borderBottom = '1px solid #4a5568';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.expertise-category, .experience-item, .project-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility function for smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Experience Timeline Toggle
document.addEventListener('DOMContentLoaded', () => {
    const timelineHeaders = document.querySelectorAll('.timeline-header');
    
    timelineHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const timelineItem = header.closest('.timeline-item');
            const isActive = timelineItem.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.timeline-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                timelineItem.classList.add('active');
            }
        });
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Portfolio loaded successfully');
    
    // Video Modal Functionality
    const playVideoBtn = document.getElementById('playVideoBtn');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.querySelector('.video-modal-close');
    const cancelBtn = document.querySelector('.video-modal-cancel');

    if (playVideoBtn && videoModal && modalVideo && closeModal && cancelBtn) {
        // Open video modal
        playVideoBtn.addEventListener('click', () => {
            videoModal.classList.add('show');
            modalVideo.play();
        });

        // Function to close modal
        const closeVideoModal = () => {
            videoModal.classList.remove('show');
            modalVideo.pause();
            modalVideo.currentTime = 0;
        };

        // Close video modal with X button
        closeModal.addEventListener('click', closeVideoModal);

        // Close video modal with Cancel button
        cancelBtn.addEventListener('click', closeVideoModal);

        // Close modal when clicking outside the video
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('show')) {
                closeVideoModal();
            }
        });
    }
});

// Booking Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const bookingBtn = document.getElementById('bookingBtn');
    const bookingModal = document.getElementById('bookingModal');
    const bookingClose = document.querySelector('.booking-modal-close');
    const bookingForm = document.getElementById('bookingForm');

    if (bookingBtn && bookingModal && bookingClose && bookingForm) {
        // Open booking modal
        bookingBtn.addEventListener('click', () => {
            bookingModal.classList.add('show');
        });

        // Close booking modal
        const closeBookingModal = () => {
            bookingModal.classList.remove('show');
            bookingForm.reset();
            // Reset custom pickers
            document.getElementById('meetingDate').value = '';
            document.getElementById('meetingTime').value = '';
            document.querySelector('.calendar-dropdown').classList.remove('show');
            document.querySelector('.time-dropdown').classList.remove('show');
        };

        bookingClose.addEventListener('click', closeBookingModal);

        // Close modal when clicking outside
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                closeBookingModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && bookingModal.classList.contains('show')) {
                closeBookingModal();
            }
        });

        // Custom Date Picker
        const dateInput = document.getElementById('meetingDate');
        const calendarDropdown = document.querySelector('.calendar-dropdown');
        const calendarDays = document.querySelector('.calendar-days');
        const monthYearDisplay = document.querySelector('.calendar-month-year');
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');

        let currentDate = new Date();
        let selectedDate = null;

        dateInput.addEventListener('click', (e) => {
            e.stopPropagation();
            calendarDropdown.classList.toggle('show');
            document.querySelector('.time-dropdown').classList.remove('show');
        });

        function renderCalendar(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            
            // Set month/year display
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                              'July', 'August', 'September', 'October', 'November', 'December'];
            monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

            // Get first day of month and number of days
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const daysInPrevMonth = new Date(year, month, 0).getDate();

            // Clear calendar
            calendarDays.innerHTML = '';

            // Get today's date for comparison
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            // Add previous month's days
            for (let i = firstDay - 1; i >= 0; i--) {
                const day = daysInPrevMonth - i;
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day other-month';
                dayElement.textContent = day;
                calendarDays.appendChild(dayElement);
            }

            // Add current month's days
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.textContent = day;

                const dayDate = new Date(year, month, day);
                dayDate.setHours(0, 0, 0, 0);

                // Disable past dates
                if (dayDate < today) {
                    dayElement.classList.add('disabled');
                }

                // Mark today
                if (dayDate.getTime() === today.getTime()) {
                    dayElement.classList.add('today');
                }

                // Mark selected date
                if (selectedDate && dayDate.getTime() === selectedDate.getTime()) {
                    dayElement.classList.add('selected');
                }

                // Add click handler
                if (dayDate >= today) {
                    dayElement.addEventListener('click', () => {
                        selectedDate = dayDate;
                        const formattedDate = `${String(month + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;
                        dateInput.value = formattedDate;
                        calendarDropdown.classList.remove('show');
                        renderCalendar(currentDate);
                    });
                }

                calendarDays.appendChild(dayElement);
            }

            // Add next month's days to fill grid
            const totalCells = calendarDays.children.length;
            const remainingCells = 42 - totalCells; // 6 rows * 7 days
            for (let day = 1; day <= remainingCells; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day other-month';
                dayElement.textContent = day;
                calendarDays.appendChild(dayElement);
            }
        }

        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        });

        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        });

        // Initialize calendar
        renderCalendar(currentDate);

        // Custom Time Picker
        const timeInput = document.getElementById('meetingTime');
        const timeDropdown = document.querySelector('.time-dropdown');
        const hourScroll = document.getElementById('hourScroll');
        const minuteScroll = document.getElementById('minuteScroll');
        const periodScroll = document.getElementById('periodScroll');

        let selectedHour = null;
        let selectedMinute = null;
        let selectedPeriod = null;

        timeInput.addEventListener('click', (e) => {
            e.stopPropagation();
            timeDropdown.classList.toggle('show');
            calendarDropdown.classList.remove('show');
        });

        // Generate hours (1-12)
        for (let i = 1; i <= 12; i++) {
            const hourOption = document.createElement('div');
            hourOption.className = 'time-option';
            hourOption.textContent = String(i).padStart(2, '0');
            hourOption.dataset.value = i;
            hourOption.addEventListener('click', () => {
                selectedHour = i;
                updateTimeDisplay();
                document.querySelectorAll('#hourScroll .time-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                hourOption.classList.add('selected');
            });
            hourScroll.appendChild(hourOption);
        }

        // Generate minutes (00, 15, 30, 45)
        for (let i = 0; i < 60; i += 15) {
            const minuteOption = document.createElement('div');
            minuteOption.className = 'time-option';
            minuteOption.textContent = String(i).padStart(2, '0');
            minuteOption.dataset.value = i;
            minuteOption.addEventListener('click', () => {
                selectedMinute = i;
                updateTimeDisplay();
                document.querySelectorAll('#minuteScroll .time-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                minuteOption.classList.add('selected');
            });
            minuteScroll.appendChild(minuteOption);
        }

        // Period selection (AM/PM)
        document.querySelectorAll('#periodScroll .time-option').forEach(option => {
            option.addEventListener('click', () => {
                selectedPeriod = option.dataset.value;
                updateTimeDisplay();
                document.querySelectorAll('#periodScroll .time-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                option.classList.add('selected');
            });
        });

        function updateTimeDisplay() {
            if (selectedHour !== null && selectedMinute !== null && selectedPeriod !== null) {
                const timeString = `${String(selectedHour).padStart(2, '0')}:${String(selectedMinute).padStart(2, '0')} ${selectedPeriod}`;
                timeInput.value = timeString;
            }
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.custom-date-picker')) {
                calendarDropdown.classList.remove('show');
            }
            if (!e.target.closest('.custom-time-picker')) {
                timeDropdown.classList.remove('show');
            }
        });

        // Handle form submission
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('clientName').value,
                email: document.getElementById('clientEmail').value,
                date: document.getElementById('meetingDate').value,
                time: document.getElementById('meetingTime').value,
                notes: document.getElementById('meetingNotes').value
            };

            // Create email body
            const emailSubject = encodeURIComponent(`Meeting Request from ${formData.name}`);
            const emailBody = encodeURIComponent(
                `New Meeting Request\n\n` +
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Date: ${formData.date}\n` +
                `Time: ${formData.time}\n\n` +
                `Additional Notes:\n${formData.notes || 'No additional notes'}\n\n` +
                `---\n` +
                `This meeting request was submitted through your portfolio website.`
            );

            // Open Gmail compose with pre-filled data
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=flowsgzx@gmail.com&su=${emailSubject}&body=${emailBody}`;
            window.open(gmailUrl, '_blank');

            // Show success message
            alert('Opening Gmail to send your meeting request. Please click "Send" in the new window.');

            // Close modal and reset form
            closeBookingModal();
        });
    }
});

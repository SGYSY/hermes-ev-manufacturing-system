// 获取所有选项和相关元素
const sections = document.querySelectorAll(".selection-section .options");
const previewImage = document.getElementById("preview-image");
const summaryText = document.getElementById("summary-text");
const purchaseButton = document.getElementById('purchase-button'); // 获取购买按钮

// 为每个选项区域的选项绑定点击监听器
sections.forEach(section => {
    section.addEventListener("click", (e) => {
        const target = e.target.closest(".option"); // 确保点击的是包含 .option 类的元素
        if (!target) return; // 如果没有找到有效的选项元素，退出函数

        // 取消当前区域内的选中状态
        section.querySelectorAll(".option").forEach(option => option.classList.remove("selected"));
        target.classList.add("selected"); // 为当前点击的选项添加选中状态

        // 更新预览图片，添加淡入淡出效果
        const previewSrc = target.dataset.preview; // 获取选中选项的数据预览图片路径
        if (previewSrc) {
            // 图片淡出
            previewImage.style.opacity = "0";

            setTimeout(() => {
                const timestamp = new Date().getTime(); // 获取当前时间戳，解决缓存问题
                previewImage.src = `${previewSrc}?_=${timestamp}`; // 更新图片路径

                // 图片淡入
                previewImage.style.opacity = "1";
            }, 300); // 等待300ms后切换图片
        }

        // 更新总结信息
        updateSummary();
    });
});

// 更新总结信息，将所有已选选项的值显示出来
function updateSummary() {
    const selectedOptions = document.querySelectorAll(".option.selected");
    const summary = Array.from(selectedOptions)
        .map(option => option.dataset.value) // 提取每个选中选项的数据值
        .join(" | "); // 将选中值用 | 分隔拼接成字符串

    // 如果没有选中任何选项，显示默认提示信息
    summaryText.textContent = summary || "请选择车型、颜色和配件";

    // 检查是否已选择所有配件项
    const allSections = document.querySelectorAll('.selection-section');
    let allSelected = true;

    // 遍历每个配件区域，确保每个区域至少选择了一个选项
    allSections.forEach(section => {
        if (section.querySelectorAll('.option.selected').length === 0) {
            allSelected = false;
        }
    });

    // 启用或禁用购买按钮
    if (allSelected) {
        purchaseButton.disabled = false; // 所有配件都选中时，启用按钮
    } else {
        purchaseButton.disabled = true; // 否则禁用按钮
    }
}

// 处理购买按钮点击事件
purchaseButton.addEventListener('click', () => {
    if (purchaseButton.disabled) {
        return; // 如果按钮禁用，直接返回
    }

    const selectedOptions = document.querySelectorAll(".option.selected");
    if (selectedOptions.length === 0) {
        alert("请先选择配置！");
        return;
    }

    const selectedValues = Array.from(selectedOptions)
        .map(option => option.dataset.value)
        .join(", ");
    
    // 这里可以做进一步的处理，比如提交订单，或者显示订单详情
    alert(`你已选择以下配置：\n${selectedValues}`);
});

// 顶部导航栏的交互逻辑，显示和隐藏下拉菜单及遮罩层
document.querySelectorAll('.navbar-item').forEach(item => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay); // 添加遮罩层到 body

    item.addEventListener('mouseenter', () => {
        let dropdown = item.querySelector('.dropdown');
        
        // 显示下拉菜单
        dropdown.style.display = 'block';
        setTimeout(() => {
            dropdown.style.opacity = '1';
            dropdown.style.transform = 'translateY(0)';
        }, 50);  // 延迟平滑显示动画

        // 显示遮罩层
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 50);
    });

    item.addEventListener('mouseleave', () => {
        let dropdown = item.querySelector('.dropdown');
        
        // 隐藏下拉菜单
        dropdown.style.opacity = '0';
        dropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            dropdown.style.display = 'none';
        }, 300); // 动画完成后隐藏

        // 隐藏遮罩层
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    });
});
// Adding functionality to the "Contact Us" link
document.getElementById('contactUs').addEventListener('click', function() {
    alert('Contact Information:\n\n' +
          'Email: contact@hermes.com\n' +
          'Phone: +123-456-7890\n' +
          'Address: 123 Hermes Street, Vehicle City, EV Land');
  });
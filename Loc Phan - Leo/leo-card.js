window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('leo-card-container').innerHTML = `
    <div class="profile-card-leo" onclick="window.open('Loc Phan - Leo/Leo.html', '_blank')" tabindex="0" style="width: 180px; border: 1px solid #ddd; border-radius: 8px; padding: 10px; font-family: Arial, sans-serif; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.05); margin: 10px; cursor: pointer; transition: transform 0.2s cubic-bezier(.4,2,.6,1), box-shadow 0.2s; outline: none;">
      <img src="Loc Phan - Leo/ava.jpg" alt="Loc Phan" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; margin-bottom: 8px;">
      <h3 style="margin: 6px 0 2px; font-size: 14px;">Loc Phan</h3>
      <p style="margin: 0; font-size: 12px; color: #666;">Tech Fellow</p>
      <p style="margin: 0 0 8px; font-size: 11px; color: #999;">I.C.Stars Milwaukee</p>
      <p style="font-size: 11px; color: #333; margin-bottom: 6px;">Passionate About Learning and Innovating with AI | Aspiring AI Developer | Transforming Ideas into Intelligent Solutions</p>
      <p style="font-size: 11px; margin: 0 0 4px;"><strong>Skills:</strong> Algorithm Design • AI Model Development • Data Pipeline Design </p>
      <p style="font-size: 11px; margin: 0 0 8px;"><strong>Project:</strong> AI-Enabled Homelab Automation System </p>
      <div style="display: flex; justify-content: center; gap: 8px;">
        <a href="https://linkedin.com/in/ryo-2k3" target="_blank" style="padding: 2px; display: inline-flex; align-items: center;" onclick="event.stopPropagation();">
          <img src="image/linkedin.webp" alt="LinkedIn" style="width: 16px; height: 16px;">
        </a>
        <a href="https://github.com/lphan3" target="_blank" onclick="event.stopPropagation();">
          <img src="image/github.webp" alt="GitHub" style="width: 16px; height: 16px;">
        </a>
      </div>
    </div>
  `;
});
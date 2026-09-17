import os
import qrcode
from PIL import Image, ImageDraw, ImageFont

def generate_qrs():
    url = "https://sebastian19charry.github.io/sabores-del-paraiso/"
    output_dir = r"c:\Users\seb0c\Desktop\Pagina Geraldin\Pagina-Geral"
    public_img_dir = os.path.join(output_dir, "frontend", "public", "images")
    favicon_path = os.path.join(output_dir, "frontend", "public", "favicon.png")

    os.makedirs(public_img_dir, exist_ok=True)

    # 1. Configurar código QR con alta corrección de errores (H = 30%)
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=16,
        border=3,
    )
    qr.add_data(url)
    qr.make(fit=True)

    # Colores de marca: verde oscuro elegante (#14532D) sobre fondo blanco
    qr_img = qr.make_image(fill_color="#14532D", back_color="#FFFFFF").convert("RGBA")

    # Si existe el favicon/icono de maracuyá, incrustarlo en el centro
    if os.path.exists(favicon_path):
        icon = Image.open(favicon_path).convert("RGBA")
        # Tamaño del logo central (~22% del ancho del QR)
        qr_width, qr_height = qr_img.size
        logo_size = int(qr_width * 0.22)
        icon = icon.resize((logo_size, logo_size), Image.Resampling.LANCZOS)

        # Crear un fondo circular blanco detrás del logo para máxima legibilidad
        padding = 10
        circle_size = logo_size + padding * 2
        mask_bg = Image.new("RGBA", (circle_size, circle_size), (0, 0, 0, 0))
        draw_mask = ImageDraw.Draw(mask_bg)
        draw_mask.ellipse([0, 0, circle_size - 1, circle_size - 1], fill=(255, 255, 255, 255), outline=(245, 158, 11, 255), width=4)

        # Pegar el icono en el centro del círculo blanco
        mask_bg.paste(icon, (padding, padding), icon)

        # Posicionar en el centro exacto del QR
        pos_x = (qr_width - circle_size) // 2
        pos_y = (qr_height - circle_size) // 2
        qr_img.paste(mask_bg, (pos_x, pos_y), mask_bg)

    # Guardar QR directo de alta resolución
    qr_direct_path = os.path.join(output_dir, "QR_Sabores_Del_Paraiso.png")
    qr_img.save(qr_direct_path, "PNG")
    print(f"QR directo guardado en: {qr_direct_path}")

    # Guardar copia para la web
    web_qr_path = os.path.join(public_img_dir, "qr_menu.png")
    qr_img.save(web_qr_path, "PNG")
    print(f"QR web guardado en: {web_qr_path}")

    # 2. Crear una Tarjeta/Volante imprimible decorativa (800x1100 px)
    card_width, card_height = 800, 1100
    card = Image.new("RGBA", (card_width, card_height), (254, 252, 232, 255)) # Fondo marfil/crema suave (#FEFCE8)
    draw = ImageDraw.Draw(card)

    # Marco decorativo con borde verde y dorado
    draw.rectangle([25, 25, card_width - 25, card_height - 25], outline=(34, 197, 94, 255), width=3)
    draw.rectangle([35, 35, card_width - 35, card_height - 35], outline=(245, 158, 11, 255), width=2)

    # Encabezado superior con estilo
    # Intentar cargar fuentes estándar de Windows si están disponibles
    font_title = None
    font_sub = None
    font_call = None
    font_url = None

    font_paths = [
        r"C:\Windows\Fonts\arialbd.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf",
        r"C:\Windows\Fonts\tahomabd.ttf"
    ]
    font_reg_paths = [
        r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\tahoma.ttf"
    ]

    for p in font_paths:
        if os.path.exists(p):
            font_title = ImageFont.truetype(p, 42)
            font_sub = ImageFont.truetype(p, 22)
            font_call = ImageFont.truetype(p, 26)
            break
    
    for p in font_reg_paths:
        if os.path.exists(p):
            font_url = ImageFont.truetype(p, 20)
            break

    if font_title is None:
        font_title = font_sub = font_call = font_url = ImageFont.load_default()

    # Textos
    title_text = "SABORES DEL PARAÍSO"
    sub_text = "Postres & Delicias Artesanales de Maracuyá"
    call_text = "¡Escanea con tu celular para ver nuestro catálogo!"
    loc_text = "Pulí, Cundinamarca • Pedidos por WhatsApp"

    # Centrar textos
    def draw_centered_text(y, text, font, color):
        bbox = draw.textbbox((0, 0), text, font=font)
        text_w = bbox[2] - bbox[0]
        x = (card_width - text_w) // 2
        draw.text((x, y), text, font=font, fill=color)

    # Dibujar encabezados
    draw_centered_text(80, title_text, font_title, (21, 128, 61, 255))   # Verde elegante
    draw_centered_text(145, sub_text, font_sub, (217, 119, 6, 255))      # Dorado maracuyá

    # Línea decorativa
    draw.line([(150, 195), (card_width - 150, 195)], fill=(245, 158, 11, 255), width=2)

    # Redimensionar el QR para la tarjeta (500x500)
    qr_card_size = 500
    qr_resized = qr_img.resize((qr_card_size, qr_card_size), Image.Resampling.LANCZOS)
    
    # Marco blanco para el QR en la tarjeta
    qr_box_x = (card_width - qr_card_size) // 2
    qr_box_y = 220
    draw.rounded_rectangle(
        [qr_box_x - 18, qr_box_y - 18, qr_box_x + qr_card_size + 18, qr_box_y + qr_card_size + 18],
        radius=24,
        fill=(255, 255, 255, 255),
        outline=(229, 231, 235, 255),
        width=2
    )
    card.paste(qr_resized, (qr_box_x, qr_box_y), qr_resized)

    # Textos inferiores (sin el link)
    draw_centered_text(785, call_text, font_call, (17, 24, 39, 255))

    # Pie de tarjeta
    draw.rounded_rectangle(
        [100, 870, card_width - 100, 950],
        radius=15,
        fill=(254, 240, 138, 255),
        outline=(245, 158, 11, 255),
        width=2
    )
    draw_centered_text(895, loc_text, font_sub, (146, 64, 14, 255))

    card_save_path = os.path.join(output_dir, "QR_Volante_Sabores_Del_Paraiso.png")
    card.save(card_save_path, "PNG")
    print(f"Volante QR imprimible guardado en: {card_save_path}")

if __name__ == "__main__":
    generate_qrs()
